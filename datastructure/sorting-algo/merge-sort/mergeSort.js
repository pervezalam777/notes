
function mergeSort(inputArray){
  if(inputArray.length < 2) {
    return inputArray;
  }
  const middle = Math.ceil(inputArray.length / 2);
  const leftArray = inputArray.splice(0, middle);
  const rightArray = inputArray;
  return mergeArray(mergeSort(leftArray), mergeSort(rightArray))
}

function mergeArray(leftArray, rightArray) {
  let outputArray = [];
  while(leftArray.length && rightArray.length) {
    if(leftArray[0] < rightArray[0]) {
      outputArray.push(leftArray.shift());
    } else {
      outputArray.push(rightArray.shift());
    }
  }
  return outputArray.concat(...leftArray, ...rightArray);
}

const unsortedArray = [8,4,5,9,7,3,2,6,4];
const sortedArray = mergeSort([...unsortedArray]);
console.log('unsorted array - ', unsortedArray);
console.log('sorted array', sortedArray);