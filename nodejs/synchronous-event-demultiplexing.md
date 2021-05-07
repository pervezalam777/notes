# Event De-multiplexing
As busy-waiting is not an ideal solution for non-blocking resources. `Modern OS` provide a `native mechanism` to handle concurrent `non-blocking resources` in an `efficient way` that is `synchronous event de-multiplexing` (also know as `event notification interface`)

```javascript
watchedList.add(socketA, FOR_READ);
watchedList.add(SocketB, FOR_WRITE);
watchedList.add(fileA, FOR_READ);
while(events = deMultiplexer.watch(watchedList)) {
  // event loop
  for(event of events){
    // This read will never block and will always return data
    data = event.resource.read();
    if(data === RESOURCE_CLOSED) {
      // the resource was closed, remove it from the watched list
      deMultiplexer.unWatch(event.resource);
    } else {
      // Some actual data was received, process it
      consumeData(data)
    }
  }
}
```


## Term
- **`Multiplexing`**: refers to the method by which `multiple signals` are `combined into one` so that they can be `easily transmitted` over a medium with `limited capacity`.
- **`De-multiplexing`**: refers to the `opposite of 'multiplexing'`, whereby the `signal` is `split again` into its `original components`.