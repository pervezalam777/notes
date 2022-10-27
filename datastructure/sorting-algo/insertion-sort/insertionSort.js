
function insertionSort(arr) {
  const newArr = [...arr];
  const len = newArr.length;
  for(let i = 1; i < len; i++) {
    const key = newArr[i];
    let j = i - 1;
    while(j >= 0 && newArr[j] > key){
      newArr[j+1] = newArr[j];
      j = j - 1;
    }
    newArr[j+1] = key;
  }
  return newArr;
}

const unsortedArray = [5,2,6,3,1];
const  sortedArray = insertionSort(unsortedArray);
console.log('unsorted array ', unsortedArray);
console.log('sorted array ', sortedArray);