# Scalability

## Scale Cube:
- X-axis : Cloning
- Y-axis : De-composing by services/functionality
- Z-axis : Splitting by data partition.

> In Node.js vertical scaling (adding more resources to a single machine) and horizontal scaling(adding more machine to the infra-structure) are almost equivalent concept

## Cluster module
The master process is responsible from spawning a number of process (Workers). each represents the instance of the application.
> The cluster module uses an explicit round-robin load balancing algorithm. 

> Round robin scheduling enabled by default on all the platform except Windows and it can be globally modified by setting the variable cluster.schedulingPolicy

> Network benchmarking tool such as [autocannon](https://www.npmjs.com/package/autocannon) 

```bash
# The following command will load the server with 200 concurrent connection for 10 seconds
$ npx autocannon -c 200 -d 10 http://localhost:8080
```
> It is important to note that each worker is a separate Node.js process with its own event loop, memory and loaded modules.

> Under the hood, the `cluster.fork()` function uses the `child_process.fork()` API, therefore, there is a communication channel available between master and the worker.

> The worker process can be accessed from variable `cluster.workers`. The code snippet `Object.values(cluster.workers).forEach(worker => worker.send('hello'))` can be used to send hello message to each worker.

> [pm2](https://github.com/Unitech/pm2) is small utility, based on cluster, which offers load-balancing, process monitoring, zero down time restart, and other goodies

## Dealing with stateful communications
The cluster module does not work well wih stateful communication where the application state is not shared between the various instances. This is because different request belonging to the same stateful session may potentially be handled by a different instance of the application.

## Sharing the state across multiple instances
The first options we have to scale an application using stateful communications is sharing the state across all the instances. 

This can easily be achieved with a shared datastore, such as, for example PostgreSQL, MongoDB, CouchDB, or even better, we can use in-memory store such as Redis or Memcached

The only drawback of using a shared store for the communication state is that applying this pattern might require a significant amount of refactoring of the code base.

In cases where refactoring might not be feasible, for instance, because of too many changes required or stringent time constraints in making the application more scalable, we can rely on invasive solution: sticky load balancing (or sticky sessions)