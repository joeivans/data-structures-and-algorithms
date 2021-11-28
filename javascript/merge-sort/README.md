# Merge Sort Challenge Summary
<!-- Description of the challenge -->

- Analyze merge sort, starting from pseudocode.
- Implement merge sort in JavaScript.
- Add test cases and ensure they pass.

## Strategy

### Whiteboard Process
<!-- Embedded whiteboard image -->

![Whiteboard](docs/images/Merge%20sort%20whiteboard.jpg)

### Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

I took the approach of analyzing the pseudocode then writing a JavaScript implementation.

I changed the variable names to more obvious names and added utility functions for clarity.

Time efficiency, after removing insignificant factors, is `O(n log n)` because the algorithm uses the divide-and-conquer strategy.

Space efficiency, after removing insignificant factors, is `O(n)` because one additional copy of the array is created in memory.

### Solution
<!-- Show how to run your code, and examples of it in action -->

Merge sort tests can be run with `npm run test:code-challenge-class-27`.

A client application can consume the merge sort method as follows:

``` js
const mergeSort = require('./index'); // import the function from the merge-sort directory

mergeSort([5, 4, 3, 2, 1]);           // sort an array

console.log(arrayToSort);             // expected output: "[ 1, 2, 3, 4, 5 ]"
```

## Tests

``` bash
cd javascript
npm run 'test:code-challenge-class-27'
```
