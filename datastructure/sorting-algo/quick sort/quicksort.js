function quickSort(array, low, high){
  if(low < high) {
    const pivotPosition = partition(array, low, high);
    quickSort(array, low, pivotPosition - 1);
    quickSort(array, pivotPosition + 1, high);
  }
  return array;
}
function partition(array, low, high) {
  // last element as pivot point
  const pivot = array[high];
  let i = (low - 1);
  for(let j = low; j <= high -1; j++){
    if(array[j] < pivot) {
      i++;
      swapPosition(array, i, j);
    }
  }
  swapPosition(array, i+1, high);
  return i + 1;
}

function swapPosition(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const unsortedArray =  [3,5,8,6,4,2,9];
const sortedArray = quickSort([...unsortedArray], 0, unsortedArray.length - 1);
console.log('unsorted array ', unsortedArray);
console.log('sorted array', sortedArray);