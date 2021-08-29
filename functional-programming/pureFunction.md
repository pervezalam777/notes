# Pure function
- Always takes at least one argument and return a value or a function
- Do not cause any side-effect 
  - do not set global state,
  - do not change anything about application state
- Treat function argument as immutable data. 
  - It should not make any changes to the received arguments rather make a copy of it and change in that.

`Good practice`: Qualified as pure function
```javascript
//Pure function
function addRecord(record, list) {
  return [...list, record]
}

// Application level list
const list = [
  {title: 'OOJS'},
  {title: 'React'}
]

const newList = addRecord({title:'functionalJS'}, list);
console.log('list and newList is not same', (list === newList));
console.log('length is not same', (list.length === newList.length))
```

`Bad practice`: do not qualify as pure function
```javascript
//Impure function
function addRecord(record, list) {
  list.push(record);
  return list;
}

// Application level list
const list = [
  {title: 'OOJS'},
  {title: 'React'}
]

const newList = addRecord({title:'functionalJS'}, list);
console.log('list and newList is same', (list === newList));
console.log('length is same', (list.length === newList.length))
```

## References:
- [Watch on immutability](https://www.youtube.com/watch?v=I7IdS-PbEgI)
- [Immer](https://immerjs.github.io/immer/)
- [immutable-js](https://github.com/immutable-js/immutable-js)