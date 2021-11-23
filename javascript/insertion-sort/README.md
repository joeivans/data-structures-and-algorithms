# Insertion Sort Challenge Summary
<!-- Description of the challenge -->

- Analyze insertion sort, starting from pseudocode.
- Implement insertion sort in JavaScript.
- Add test cases and ensure they pass.

## Whiteboard Process
<!-- Embedded whiteboard image -->

![Whiteboard](docs/images/Insertion%20sort%20whiteboard.jpg)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

I took the approach of analyzing the pseudocode then writing a JavaScript implementation.

I changed the variable names to more obvious names. The pseudocode has `i` and `j`, but sets the left-hand marker to `j` and the right-hand to `i`, which is actually out-of-order, unintuitive and doesn't explain its allocation.

Time efficiency, after removing insignificant factors, is `O(n^2)` because the array is traversed inside an already traversing outer loop.

Space efficiency, after removing insignificant factors, is `O(1)` because no additional variables or containers are created, just shifted in-place in the input array.

## Solution
<!-- Show how to run your code, and examples of it in action -->

Insertion sort tests can be run with `npm run test:code-challenge-class-26`.

A client application can consume the insertion sort method as follows:

``` js
const insertionSortFunc = require('./index'); // import the function from the insertion-sort directory

insertionSortFunc([5, 4, 3, 2, 1]);           // sort an array

console.log(arrayToSort);                     // expected output: "[ 1, 2, 3, 4, 5 ]"
```
