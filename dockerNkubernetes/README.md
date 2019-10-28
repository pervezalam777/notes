# Docker & Kubernetes

Docker and kubernetes are software which manage application orcastration using container with a VM behind the seen. Applicatoin made out of docker and kubernetes can be deployed on various cloud platforms. e.g. gcp, aws and azure.

## Docker

To find out running docker containers

```bash
> docker ps
```

To list all the container running and stoped since the docker running on the machine

``` bash
> docker ps --all
```

To run dokcer image from dockerhub [dockerhub](https://hub.docker.com/)

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

In order to reach to the docker image localhost port use following

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