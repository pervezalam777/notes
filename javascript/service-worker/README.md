# Service Worker
## key notes
- It only run over HTTPS, for security reasons.
- Sits between web application and the network 
- Intercept all the network request then
  - can pass request to network
  - can store the response data using webAPI
  - can respond stored data without network call 
- Effective for offline experience (when internet connection lost)
- They will also allow access to push notifications and background sync APIs
- It is an event-driven worker registered against an origin and a path
- run in a worker context: it therefore has no DOM access
- runs on a different thread to the main JavaScript
- It is designed to be fully async; as a consequence, APIs such as synchronous [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) and [Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) can't be used inside a service worker.
- Dynamic import with throw error (e.g. `import()`)
- Static import using `import` statement allowed


## Flow
```javascript
// Main Code block
if()
```

## API


## Three types of cache mechanism  

### `Network first approach`
Always request to server for data; store data in storage in case network is not available

### `Local first approach` 
Load request data from local storage if not available then fetch it from server

### `Local first then network`
Load request from local storage send response then fetch from server in the background and update the local storage


## Cache invalidation
- On service worker version change
- On time lapse (e.g. every after 30 mins should fetch from server)


## Important notes
- HTTP connections are susceptible to malicious code injection by `man in the middle` attacks, and such attacks could be worse if allowed access to these powerful APIs. 
- `In Firefox`, service worker APIs are also hidden and `cannot be used` when the `user` is in `private browsing mode`.

# Ref
- [Service-worker with IndexDB: LinkedInLearning](https://github.com/LinkedInLearning/improve-performance-indexedDB-2309294)