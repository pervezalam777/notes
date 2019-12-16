# Node.js
NodeJS is used for frontend and backend development. Node.js is used only in development environment while working on frontend application. Node.js is popular because of faster I/O operation and single threaded event loop. Although each node server use single thread for event loop but for some use cases it use multiple thread (thread pool) for execution of operation on 'libuv'.

## Node.js internal structure
* **Javascript code we write** : This code is purely return in javascript
* **Node.js** : 50% of code in Javascript and 50% of it in C++ it further delegate task to *V8* and *libuv*
* **V8** : 30% code in javascript and 70% code in C++. The V8 project is an open source javascript engine created by Google.
* **libuv** : 100% code in C++. The libuv project over here is a C++ open source project that gives node access to the operating systems

## Basics of Thread
A thread is run inside a process. Each thread is visited by OS Scheduler (an Operating System application) for a certain interval (CUP cycle). Parallel thread execution depends on CUP core and its capability to execute threads in parallel (known as hyper-threading). 

## Event loop
Event loop can be visualize as a while loop which runs till the time there is:- 
* any pending timer (e.g. setTimeout, setInterval or setImmediate)
* any pending OS task (e.g. server listening to port, network request)
* any pending long running operation (e.g. *fs* module)

```bash
> node index.js
```
> Event loop starts executing just after first execution of code written to run node application. so, with the above command node.js will execute the code inside the index.js file then it will enter the event loop. 

## Node cluster
Node clustering gives you the scalability where it uses the logical CUP cores to take leverage and improve performance and reliability of your application. [PM2](https://pm2.keymetrics.io/docs/usage/cluster-mode/) is ready-made library which can be use with your node server code without making any modification. if you want to write your own cluster ready code please use following code snippet

**Cluster Manager** does the administrative tasks where it starts, stops and route network request to a node instance running in the pool.

With the following example if you would run the application and open two browser window/tabs and send request on "http://localhost:3000/slow" and "http://localhost:3000/fast" then the */fast* response would arrive earlier than the */slow* even when */slow* would have been initiated first. 

```javascript
//*index.js*
const cluster = require('cluster');

if(cluster.isMaster){
    // Cause index.js to be executed *again* but in child mode
    cluster.fork();
    cluster.fork();
} else {
    const express = require('express');
    const app = express();

    function doWork(duration) {
        const start = Date.now();
        while(Date.now() - start < duration) { }
    }

    app.get('/slow', (req, res) => {
        doWork(8000);
        res.send('Hi there, I am slow');
    });

    app.get('/fast', (req, res) => {
        res.send('Hi there, I am fast!');
    })
    app.listen(3000);
}
```

## AB (Apache Benchmark)
[apache.org:](https://httpd.apache.org/docs/2.4/programs/ab.html) *ab is a tool for benchmarking your Apache Hypertext Transfer Protocol (HTTP) server. It is designed to give you an impression of how your current Apache installation performs. This especially shows you how many requests per second your Apache installation is capable of serving.*

```bash
# -n 500: total 500 request to localhost:3000/fast
# -c 50: total number of concurrent request to localhost:3000/fast

> ab -c 50 -n 500 localhost:3000/fast
```
> ab is preinstalled with MacOS for windows find steps [here](https://www.cedric-dumont.com/2017/02/01/install-apache-benchmarking-tool-ab-on-windows/) 