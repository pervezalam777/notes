/* 
Given 2 arrays, create a function that let's a user know (true/false) 
whether these two arrays contain any common items
For Example
input
  array1 = ['a', 'b', 'c', 'x']
  array2 = ['z', 'y', 'i']
output : false
----------------
input
  array1 = ['a', 'b', 'c', 'x']
  array2 = ['z', 'y', 'x']
output : true
*/

function generateHash(data) {
  let hash = {}
  for(let key of data){
    hash[key] = key;
  }
  return hash;
}

function findCommonItem(hash, data){
  for(let value of data){
    if(hash[value]) {
      return true;
    }
  }
  return false;
}

function hasCommonItems(data1, data2) {
  if(data1.length < 1 || data2.length < 1){
    return false;
  }
  let hash =  generateHash(data1.length > data2.length ? data1 : data2);
  return findCommonItem(hash, data1.length < data2.length ? data1 : data2)
}

console.log('Should not match ', 
 hasCommonItems(['a', 'b', 'c', 'x'], ['z', 'y', 'i']) === false);
console.log('Should match ', 
  hasCommonItems(['a', 'b', 'c', 'x'], ['z', 'y', 'x']) === true);