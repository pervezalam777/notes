# Stack overflow
At time of writing this, almost all the javascript engine's are single threaded. It uses single stack to execute function. While writing piece of code you need to pay attention to stack overflow which usually happens while using recursion that goes beyond stack size.

## the following is the one of example of stack overflow
```javascript
const list = new Array(60000).join('1.1').split('.');
 
function removeItemsFromList() {
    var item = list.pop();
 
    if (item) {
        removeItemsFromList();
    }
};
 
removeItemsFromList();
```
There could be several solution to this checkout the `stackoverflow.problem-1-solution*.js`

# References
- [MDN: Background Tasks API](https://developer.mozilla.org/en-US/docs/Web/API/Background_Tasks_API#example)