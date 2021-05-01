/** 
Find the pair which makes requested sum
inputs: unsorted array, value of sum (integer as of now)
output: true if any of the pair makes the same, otherwise false 
*/

function hasPairWithSum(data, sum) {
  const lookUp = [];
  for (let value of data){
    if(lookUp.includes(sum - value)){
      return true;
    }
    lookUp.push(value);
  }
  return false;
}

console.log('should not get any pair: ', hasPairWithSum([1,2,3,9], 8) === false);
console.log('should not get any pair: ', hasPairWithSum([1,2,4,4], 8) === true);
console.log('-----------------------------------------------------------')

function hasPairWithSum_2(data, sum) {
  const matchValueSet = new Set();
  for (let value of data){
    let matchValue = sum - value;
    if(matchValueSet.has(matchValue)){ 
      return true;
    }
    matchValueSet.add(matchValue);
  }
  return false;
}

console.log('should not get any pair: ', hasPairWithSum_2([1,2,3,9], 8) === false);
console.log('should not get any pair: ', hasPairWithSum_2([1,2,4,4], 8) === true);