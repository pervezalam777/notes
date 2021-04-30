# `Data Structure`
`A data structure is a way of organizing data so that it can be used effectively.`

## **`Abstract data type`**
An abstract data type (ADT) is an abstraction of a data structure which provide only the interface to which a data structure must adhere to.

The interface dow not give any specific details about how something should be implemented or in what programming language.

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
3) `Different term for input` (if function has more then one input and option are based on that then each input param is different term so big O(n + m) or O(n*m) would be the answer)
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

# `Data Types`
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
- [`video:` Data Structures Easy to Advanced Course - Full Tutorial from a Google Engineer ](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=455s)

# Random
- `Data Structures` + `Algorithms` = `Programs`
- `What is good code?`
  - `Readable`
  - `Scalable`
    - `Speed (or time)`
    - `Memory`
- `Premature optimization is evil `