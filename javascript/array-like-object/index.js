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

  const proxy = new Proxy(target, {
    set: function(target, property, value, receiver) {
      // http://www.ecma-international.org/ecma-262/6.0/index.html#sec-array-exotic-objects-defineownproperty-p-desc
      if (property === "length") {
        // http://www.ecma-international.org/ecma-262/6.0/index.html#sec-arraysetlength
        const newLen = value >>> 0;
        const numberLen = +value;
        if (newLen !== numberLen) {
          throw RangeError();
        }
        const oldLen = target.length;
        if (newLen >= oldLen) {
          target.length = newLen;
          return true;
        } else {
          // this case gets more complex, so it's left as an exercise to the reader
          return false; // should be changed when implemented!
        }
      } else if (isArrayIndex(property)) {
        const oldLenDesc = Object.getOwnPropertyDescriptor(target, "length");
        const oldLen = oldLenDesc.value;
        const index = property >>> 0;
        if (index > oldLen && oldLenDesc.writable === false) {
          return false;
        }
        target[property] = value;
        if (index > oldLen) {
          target.length = index + 1;
        }
        return true;
      } else {
        target[property] = value;
        return true;
      }
    }
  });

  return proxy;
}

let arr = new FakeArray();
arr[0] = 10;
arr[10] = 100;
arr['some'] = 'value';
console.log('arr---',arr);
console.log('arr: length ', arr.length);
for(let item of arr) {
  console.log('item::', item);
}