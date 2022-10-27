# Bubble sort
Bubble sort checks two adjacent element from the start and swap them base on desired order (A-Z or Z-A). On each iteration it store the sorted elements in the last

## The following is the algo sudo code
```javascript
// For A-Z -> increasing order
for i -> 0 to array length
  for j -> 0 to (array length - i - 1)
    if(arr[j] > arr[j + 1])
      swapValue(arr[j], arr[j+1])
```