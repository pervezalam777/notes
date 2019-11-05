# Docker & Kubernetes

Docker and kubernetes are software which manage application orcastration using container with a VM behind the seen. Applicatoin made out of docker and kubernetes can be deployed on various cloud platforms. e.g. gcp, aws and azure.

# Docker

To find out running docker containers

```bash
> docker ps
```

To list all the container running and stoped since the docker running on the machine

``` bash
> docker ps --all
```

To create docker container. The following command will create container id
```bash
> docker create busybox echo "hello world"
> 3e400af9c4591d...
```

To start docker container. Use container id generated from above command
```bash
> docker start 3e400af9c4591d...
```

To retrieve logs from the last run container which is useful for debugging purpose.
```bash
> docker logs 3e400af9c4591d...
```

To run dokcer image from dockerhub [dockerhub](https://hub.docker.com/). docker run command combines *docker create* and *docker start* commands 

`> docker run <image-name>`

```bash
> docker run busybox echo "hello world"
```

To run docker container in the background

`> docker run -d <image-name>`

```bash
> docker run -d busybox
```

To initiate shut down process which takes **10 second** then kill it. Obtain the container id via running *"docker ps"* command

`> docker stop <containerId>`

```bash
> docker stop 3e400af9c4591d...
```

To Kill container immediately 

`> docker kill <containerId>`

```bash
> docker kill 3e400af9c4591d...
```

To create docker image out of *Dockerfile* 

```bash
> docker build .
```

To create docker image out of docker file which name is not exactly "Dockerfile" 

`> docker build -f <path/name of docker file> <build location>`

```bash
docker build -f ./Dockerfile.dev .
```

To create docker image with tag name with the naming convesion of your docker id, project/application name and version number. If you do not specify version number it consider it *latest*

`> docker build -t  <[your DockerId]/[Repo/Project name]:[version]> <Dockerfile directory>`

```bash
> docker build -t pervezalam777/nodeserver .
```

To run image with tag name is good practice that avoid process of finding container id.

`> docker run <tagname>`
```bash
> dokcer run pervezalam777/nodeserver
```

To debug image with shell command

```bash
> docker run -it busybox sh
```

To debug runing contianer

`> docker exec -it <containerId> sh`
```bash
docker exec -it 3e400af9c4591d... sh
```
- exec: run another command inside the container
- -it: Allows us to provide inputs to the container

In order to reach to the docker image localhost port use following

### redis cli 
redis is in-memory database and can be run using docker for getting and setting values

Steps to get into the redis sever
* step 1: Open terminal window and type the following command
```bash
> docker run redis
```
* step 2: Open another terminal window and type the following command
```bash
> docker ps
> docker exec -it <redis-container-id> sh
# redis-cli
127.0.0.1:6379> GET visits
127.0.0.1:6379> SET visits 1000
127.0.0.1:6379> GET visits
```
       

`> docker run -p <external port>:<internal port> <tag name>`

```bash
> docker run -p 3000:3000 pervezalam777/nodeserver
```

## Docker compose
This is a CLI (command line interface) which reads docker-compose.yml file and create multiple images. With docker managing communication between container require little bit of overhead and little bit difficult to do so. docker-compose CLI overcome this challenge and run these images run on the same network so that each container image interact with each other

To run docker-compose which require building image before
```bash
> docker-compose up --build
```

To run docker-compose if images are already built
``` bash
> docker-compose up
```

To run docker compose in background
```bash
> docker-compose up -d
```

To kill or stop all docker compse images at once
```bash
> docker-compose down
```

There are four types of restart policies available with docker compose "no", always, on-failure and unless-stopped

*"no" should in quote as no in yml file means false*


### NOTE: 
* docker on window have some issue with watch for react application. If the project runs inside a virtual machine such as (a Vagrant provisioned) VirtualBox, create an .env file in your project directory if it doesn’t exist, and add CHOKIDAR_USEPOLLING=true to it. This ensures that the next time you run npm start, the watcher uses the polling mode, as necessary inside a VM.

# Kubernetes
* **Container** run docker image inside it.
* **Node** is a kind of VM that can run one or more container inside it.
* **Master** controls what each node does
* **Nodes + Master** forms a cluster
* **Load Balancer** handle out side request and relay those request on to the nodes
* **kubectl** This is use for development and production. Use for managing containers in the node.
* **minikube** Use for managing VM itself. It run and manage cluster environment on your local machine.
* **Object** kubernetes yaml file creates object with type "pod", "service", "StatefulSet", and "ReplicaController"
* **apiVersion** *apiVersion:v1* and *apiVersion:app/v1* each API version defines a defferent set of objects.

## Minikube Setup on Windows Pro/Enterprise
These instructions are for setting up and installing Minikube and its dependencies for use on Windows Pro or Enterprise with Docker Desktop and HyperV

### Install Kubectl
1. Create a new directory that you will move your kubectl binaries into. A good place would be C:\bin

2. Download the latest kubectl executable from the link on the Kubernetes doc page:

https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-windows

3. Move this downloaded .exe file into the bin directory you created.

4. Use Windows search to type “env” then select “Edit the system environment variables”

5. In the System Properties dialog box, click “Environment Variables”.

6. In System Variables click on the “Path” Variable and then click “Edit”

7. Click “New” and then type C:\bin

8. Drag the newly created path so that it is higher in order than Docker's binaries. This is very important and will ensure that you will not have an out of date kubectl client.

9. Click "OK"

10. Restart your terminal and test by typing kubectl into it. You should get the basic commands and help menu printed back to your screen. If this doesn't work try restarting your machine.

11. Run kubectl version to verify that you are using the newest version and not the out of date v1.10 version

### Install Minikube
1. Download the Windows installer here:

https://github.com/kubernetes/minikube/releases/latest/download/minikube-installer.exe

2. Double click the .exe file that was downloaded and run the installer. All default selections are appropriate.

3. Open up your terminal and test the installation by typing minikube. You should get the basic commands and help menu printed back to your screen. If this doesn't work try restarting your machine.

### Configure HyperV
1. In Windows Search type "HyperV" and select "HyperV Manager"

2. In the right sidebar click "Virtual Switch Manager"

3. Leave selected "New Virtual network Switch" and "External" and click "Create Virtual Switch"

4. Name the switch "Minikube Switch" (or whatever you would like to name it)

5. Click Apply and acknowledge the "Pending changes" dialog box by clicking "yes"

6. Once the switch has been created, click "Ok"

Starting Up Minikube
Since by default Minikube expects VirtualBox to be used, we need to tell it to use the hyperv driver instead, as well as the Virtual Switch we created earlier.

Start up a terminal as an Administrator. Then, in your terminal run:

```bash
> minikube start --vm-driver hyperv --hyperv-virtual-switch "Minikube Switch"
```
> Important note, all minikube commands must be run in the context of an elevated Administrator.


### Docker compose vs kubernetes 
**Docker compose** 
* Each entry can optionally get docker-compose to build an image
* Each entry represent a container that would get created
* Each entry defines networking requirement ports

**Kubernetes** 
* expects all images to already built 
* One config file per object should be created
* Manual setup require for networking