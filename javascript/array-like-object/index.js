//------------------- WIP --------------------------
function FakeArray() {
  const target = {};

  Object.defineProperties(target, {
    "length": {
      value: 0,
      writable: true
    },
    [Symbol.iterator]: {
      // http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype-@@iterator
      value: () => {
        let index = 0;
        console.log('here......')
        return {
          next: () => ({
            done: index >= target.length,
            value: target[index++]
          })
        };
      }
    }
  });

  const isArrayIndex = function(property) {
    /* an array index is a property such that
       ToString(ToUint32(p)) === p and ToUint(p) !== 2^32 - 1 */
    const uint = property >>> 0;
    const s = uint + "";
    return property === s && uint !== 0xffffffff;
  };

  const setLength = function(target, value) {
    // http://www.ecma-international.org/ecma-262/6.0/index.html#sec-arraysetlength
    // TODO: there are several steps missing as per above link for implementation
    const newLen = value >>> 0; // Unsigned right shift (>>>)
    const numberLen = +value;
    if (newLen !== numberLen) {
      throw RangeError();
    }
    const oldLen = target.length;
    if (newLen >= oldLen) {
      target.length = newLen;
      return true;
    } else {
      //TODO: this case gets more complex, so it's left as an exercise to the reader
      return false; // should be changed when implemented!
    }
  }

  const setValueAtIndex = function(target, property, value){
    const oldLenDesc = Object.getOwnPropertyDescriptor(target, "length");
    const oldLen = oldLenDesc.value;
    const index = property >>> 0;
    if (index > oldLen && oldLenDesc.writable === false) {
      return false;
    }
    target[property] = value;
    const newLen = index + 1;
    if (newLen > oldLen) {
      target.length = newLen;
    }
    return true;
  }

  const proxy = new Proxy(target, {
    set: function(target, property, value, receiver) {
      // http://www.ecma-international.org/ecma-262/6.0/index.html#sec-array-exotic-objects-defineownproperty-p-desc
      if (property === "length") {
        return setLength(target, value)
      } else if (isArrayIndex(property)) {
        return setValueAtIndex(target, property, value)
      } else {
        target[property] = value;
        return true;
      }
    }
  });

  return proxy;
}

let arr = new FakeArray();
console.log('step 0 -> arr object created ', arr, 'length: ' ,arr.length);

arr[0] = 10;
console.log('step 1 -> ', arr, 'length: ' ,arr.length);

arr[10] = 100;
console.log('step 2 -> ', arr, 'length: ' ,arr.length);

arr['some'] = 'value';
console.log('step 3 -> ', arr, 'length: ' ,arr.length);

arr.length = 15;
console.log('step 4 -> ', arr, 'length: ' ,arr.length);

console.log('iterate over items array');
for(let item of arr) {
  console.log('item::', item);
}