# The module system
From its inception, node.js shipped with a module system, even when JavaScript still had no official support for any form of it. `The origin node.js module system is called` **CommonJS (CJS)** `and it uses the required keyword to import functions, variables, and classes exported by built-in modules or other modules located on the device's filesystem.`

CommonJS was revolution for JavaScript world in general, as it started to get popular event in the client-side world, where it is used to combine with a module bundler (such as Webpack, rollup) to produce code bundles that are easily executable by the browser. 

Today, JavaScript Has the so-called ES modules syntax (the import keyword) from which node.js inherits just the syntax, as the underlying implementation is somewhat different from that of the browser. In fact, while the browser mainly deals with remote modules, Node.js, at least for now, can only deal with modules located on the local filesystem.

So, Node.js currently comes with tow different module systems: CommonJS (CJS) and ECMAScript modules (ESM or ES modules).

## The need for modules
- Having a way to split the codebase into multiple files
- Allowing code reuse across different projects
- Encapsulation (or information hiding)
- Managing dependencies


## **`Node.js CommonJS modules`**

CommonJS module comes with three parameter provided with module revealing pattern. 
<br/> The following is the gist of CommonJS module wrapper
```javascript
(function(exports, require, module, __filename, __dirname) {
    // Module code actually lives in here
});
```

<br/>The following mock implementation how CommonJS module looks like

```javascript
function moduleLoader(filename, module, require) {
  const moduleWrapper = `
    (function(module, exports, require){
        ${fs.readFileSync(filename, 'utf8')}
    })(module, module.exports, require)`
  eval(moduleWrapper) // Avoid using eval altogether in actual implementation
}
```
The reason for loading file synchronously is that loading modules in CommonJS are deliberately synchronous operations. This approach makes sure that, if we are importing modules they (and their dependencies) are loaded in right order. 

Let's now se how require mocks look like
```javascript
function require (moduleName) {
  console.log(`Require invoked for module: ${moduleName}`)
  const id = require.resolve(moduleName) // ①
  if (require.cache[id]) { // ②
    return require.cache[id].exports
  }

  // module metadata
  const module = { // ③
    exports: {},
    id
  }
  // Update the cache
  require.cache[id] = module // ④

  // load the module
  loadModule(id, module, require) // ⑤

  // return exported variables
  return module.exports // ⑥
}
require.cache = {}
require.resolve = (moduleName) => {
  // resolve a full module id from the moduleName,
  // full path of the file
}
```

## [The resolving algorithm](https://nodejs.org/api/modules.html#modules_all_together)
The term dependency hell described a situation whereby two or more dependencies of a program in turn depend on a shared dependency, but require different incompatible versions. Node.js solves this problem by loading a different version of a module depending on where the module is loaded from.

The resolving algorithm can be divided into the following three major branches
- **`File modules`**: the `module name starts` with `'/'` consider as `absolute path` and `return as it is`. The `module name starts` with `'./'` consider as `relative path`, which is `calculated` starting from the `directory of the requiring module`.

- **`Core modules`**: The module name is not prefixed with '/' or './', the algorithm will first try to search withing the core Node.js modules

- **`Package module`**: The module name is not prefixed with '/' or './' and not found in core module, the algorithm search in 'node_modules' folder. it uses methods 1) \<moduleName\>.js, 2) \<moduleName\>/index.js, 3) the director/file specified in the main property of \<moduleName\>/package.json        


## module.exports versus exports
As per the above example you may have noticed the exports variable is just a reference to the initial value of module.exports. 

This means that we can only attach new properties to the object referenced by the exports variable, as shown in the following code:
```javascript
exports.hello = () => {
  console.log('Hello');
}
```
Reassigning the exports variable does not have any effect, because it doesn't change the content of module.exports. It will only reassign the variable itself. The following code is therefore wrong:
```javascript
exports = () => {
  console.log('Hello')
}
```

## Module definition patterns
### Named exports
```javascript
// file logger.js
exports.info = (message) => {
  consol.log('info: ', message);
}
exports.verbose = (message) => {
  consol.log('verbose: ', message);
}
exports.error = (message) => {
  consol.log('error: ', message);
}
// File main.js
const logger = require('./logger');
logger.info('This is test message')
```
### Exporting Function
This way of defining modules is also known in the community as the substack pattern, after one of its most prolific adopters, James Halliday (nickname substack - https://github.com/substack)
```javascript
// file logger.js
module.exports = (message) => { // substack
  console.log('info:', message)
}
module.exports.verbose = (message) => {
  console.log('verbose:', message)
}

// file main.js
const logger = require('./logger');
logger('This is info message');
logger.verbose('this is verbose message');
```

### Exporting a class
Every module has capability to create there own logger instance.
```javascript
// logger.js
class Logger {
  constructor(name){
    this.name = name
    console.log('Logger : constructor',  name)
  }
  info(message){
    console.log(this.name, 'info:', message);
  }
  verbose(message){
    console.log(this.name, 'verbose:', message);
  }
}
module.exports = Logger;

// main.js
const Logger = require('./logger');
const dbLogger = new Logger('DB');
dbLogger.info('this is info log');
```

### Exporting Instance
most likely Every module that require logger will get the same instance. 
```javascript
// logger.js
class Logger {
  constructor(name){
    this.name = name
    console.log('Logger : constructor',  name)
  }
  info(message){
    console.log(this.name, 'info:', message);
  }
  verbose(message){
    console.log(this.name, 'verbose:', message);
  }
}
module.exports = new Logger('fileLogger');

// main.js
const logger = require('./logger');
logger.info('this is info log');
```

### Modifying other modules or the global scope
A module can even export nothing. This can seem a bit out of place; however, we should not forget that a module can be modify the global scope and any object in it, including other modules n the cache.

In general this is a bad practice to implement the same but in some circumstances (for example, for testing) and it's sometimes used in real-life projects. A module can modify other module or objects in the global scope; well, this is called monkey patching. 
```javascript
// patcher.js that patch ./logger.js
require('./logger').info = (message) => {
  console.log('info: modified: ', message)
}

// main.js
require('./patcher');
const logger = require('./logger');
logger.info('this is info message');
```
> The real-life example of how this cab eb useful, have look at [nock](https://www.npmjs.com/package/nock), a module that allows you to mock HTTP responses in your tests.

## References
- [Asynchronous module definition (AMD)](https://requirejs.org/)
- [Universal Module Definition](https://github.com/umdjs/umd)
