# **`Data Structure`**
`A data structure is a way of organizing data so that it can be used effectively.`

## **`Abstract data type`**
An abstract data type (ADT) is an abstraction of a data structure which provide only the interface to which a data structure must adhere to.

The interface do not give any specific details about how something should be implemented or in what programming language.

| Abstraction (ADT) | Implementation (DS)                                                       |
| ------------------| ------------------------------------------------------------------------- |
| `List`            | Dynamic Array, <br />Linked list                                          |
| `Queue`           | Linked List based Queue, <br />Stake based Queue, <br/>array based queue  |
| `Map`             | Tree Map, <br/> Hash Map / Hash Table                                     |
| `Vehicle`         | Golf Cart, Car, Bike, etc.                                                |
-----------------------------------------------------------------------------------------------

## **`Complexity Analysis`**
- `Time Complexity`: How much time does an algorithm need to finish?
- `Space Complexity`: How much space does an algorithm need for its computation?


## **`Big O Notation`**
`Big O` Notation gives an `upper bound` of the complexity in the `worst case`, helping to `quantify performance` as the input `size becomes arbitrarily larger`.

### `Big O complexity in time`
- Constant Time: `O(1)`
- Learn Time: `O(n)`
- Logarithmic Time: `O(log(n))`
- Linearithmic Time: `O(nlog(n))`
- Quadric Time: `O(n^2)`
- Cubic Time: `O(n^3)`
- Exponential Time: `O(b^n)`, b > 1
- Factorial Time: `O(n!)`

### `Big O calculation rules`
1) `Worst case` (big O refers to worst case)
2) `Remove constants` (as it become insignificant when input number grow)
3) `Different term for input` (if function has more than one input and option are based on that, then each input param is different term so big O(n + m) or O(n*m) would be the answer)
4) `Drop none dominants` (if complexity is O(n + n^2) then n will be dropped and it will become O(n^2)) 

### `What can cause time in complexity`
- Operations (+,-,\\,*)
- comparison (>, <, ==)
- looping (for, while, do while)
- outside function call (function())

### `What causes space complexity`
- Variables
- Data structure
- Function call
- Allocation

### [**`Big O cheat-sheet`**](https://www.bigocheatsheet.com/)

--------
# Operation performed on dataStructure
- `Insertion`
- `Deletion`
- `Traversal`
- `Searching`
- `Sorting`
- `Access`


# **`Data Types`**
## **`Array`**
`Stored data` in `contiguous(adjacent) memory` that is `in order`
### **`Time complexity`**
- Lookup(access) -- constant time : O(1) 
- insert
  - `Push` -- constant time :` O(1)` `or` leaner time : `O(n)` if array size grow underline implementation
  - `unshift` -- linear time : `O(n)` 
  - `splice` -- linear time :  `O(n)`
  - `concat` -- liner time : `O(n)` 
- delete
  - `pop` -- constant time : `O(1)` // remove from last
  - `unshift` -- linear time : `O(n)` 
  - `splice` -- linear time :  `O(n)`
- traverse
  - `map` -- linear time : `O(n)`
  - `forEach` -- linear time : `O(n)`
  - `for, for let, while,` -- linear time : `O(n)`
- Sort
  - `sort` -- Linearithmic Time : `O(n log(n))` [as per stack overflow link](https://stackoverflow.com/questions/57763205/what-is-array-prototype-sort-time-complexity)
- search
  - `some` -- linear time : `O(n)` ? *verification pending
  - `every` -- linear time : `O(n)` ? *verification pending 
  - `indexOf` -- linear time : `O(n)`
  - `findIndex` -- linear time : `O(n)` ? *verification pending
  - `includes` -- linear time : `O(n)` ? *verification pending

### **`Type of array`**
#### **`Static Array`**
size of the array defined while declaring array
#### **`Dynamic Array`**
start with some size and grow double in size if reach to the limit.

## Linked list
## Stack
## Queues
## Priority Queues
## Union Find (disjoint set)
## Binarys Tree and Binary Search trees (BTS)
(pre-order, In-order, post-order & level order)
## Hash table
### Hash table separate chaining
### Hash table open addressing
### Hash table linear probing
### Hash table Quadratic Probing
### Hash table Double Hashing
## Fenwick Tree (Binary indexed tree)
## Balanced binary search trees (BBSTs)
## AVL tree

## References
- [`Video:` Data Structures Easy to Advanced Course - Full Tutorial from a Google Engineer ](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=455s)
- [`WIKI`: list of data structures](https://en.wikipedia.org/wiki/List_of_data_structures)

# Random
- `Data Structures` + `Algorithms` = `Programs`
- `What is good code?`
  - `Readable`
  - `Scalable`
    - `Speed (or time)`
    - `Memory`
- `Premature optimization is evil `
- **`javascript doesn't have integer it uses 64bit float` :(validation pending) - if number over flow it return `Infinity` e.g. Math.pow(6, 1000) returns 'Infinity' --- Math.pow(10, 300) valid up till here