# Node.js
NodeJS is used for frontend and backend development. Node.js is used only in development envirionment while working on frontend application. Node.js is popular because of faster I/O operation and single threaded event loop. Although each node server useses single thread for event loop but for some use cases it useses multiple thread (thread pool) for execution of operation on 'libuv'.

## Node.js internal structure
* **Javascript code we write** : This code is purely return in javascript
* **Node.js** : 50% of code in Javascript and 50% of it in C++ it further delegate task to *V8* and *libuv*
* **V8** : 30% code in javascript and 70% code in C++. The V8 project is an open source javascript engine created by Google.
* **libuv** : 100% code in C++. The libub project over here is a C++ open source project that gives node access to the operating systems

## Basics of Thread
A thread is run inside a process. Each thread is visited by OS Scheduler (an Operating System application) for a certain intevel (CUP cycle). Parallel thread execution dependes on CUP core and its capability to execute threads in parallel (known as hyper-threading). 

## Event loop
Event loop can be visualize as a while loop which runs till the time there is:- 
* any pending timer (e.g. setTimeout, setInterval or setImmediate)
* any pending OS task (e.g. server listening to port, network request)
* any pending long running operation (e.g. *fs* module)

```bash
> node index.js
```
> Event loop starts executing just after first execution of code written to run node applicatoin. so, with the above command node.js will execute the code inside the index.js file then it will enter the event loop. 

## node cluster
