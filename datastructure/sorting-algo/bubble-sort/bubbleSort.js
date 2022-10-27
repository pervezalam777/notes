
function swap(arr, firstIndex, secondIndex) {
  const temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

function bubbleSortIncreasingOrder(arr) {
  const newArr = [...arr];
  const len = newArr.length;
  for(let i = 0; i < len; i++){
    for(let j = 0; j < len - i - 1; j++) {
      if(newArr[j] > newArr[j + 1]) {
        swap(newArr, j, j+1);
      }
    }
  }
  return newArr;
}

const unsortedArray = [5, 3, 4, 2, 8, 7, 1];
const sortedArray = bubbleSortIncreasingOrder(unsortedArray);
console.log('unsorted array', unsortedArray);
console.log('sorted array', sortedArray);