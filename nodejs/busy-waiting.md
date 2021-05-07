# Busy Waiting (Polling algorithm)
The most basic pattern for dealing with non-blocking I/O is to actively poll the resource within a loop until some actual data is returned. 
```javascript
resources = [socketA, socketB, fileA]
while(!resources.isEmpty()) {
  for(resource of resources) {
    // try to read
    data = resource.read();
    if(data === NO_DATA_AVAILABLE){
      // there is no data to read at the moment
      continue;
    }
    if(data === RESOURCE_CLOSED) {
      // the resource was closed, remove if from the list
      resources.remove();
    } else {
      consumeData(data)
    }
  }
}
```

This simple technique can handle different resources in the same thread, but it is still not efficient. The loop will consume precious CPU for iterating over resources that are unavailable most of the time. `Polling algorithm` usually `result` in a `huge amount` of `wasted CUP time`.