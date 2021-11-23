# Insertion Sort

## Introduction To Insertion Sort

The goal of insertion sort is to sort an array.

The algorithm is simple:

- Start from the beginning element in an array
- Compare the value of element pairs
- Keep and maintain a cursor of the deepest element position (everything more shallow will already be sorted)
- If the element on the right is less than the element on the left, swap them in-place
- Continue this swap, moving more shallow, until the beginning element is compared and swapped, if necessary
- The algorithm is finished when the outer cursor hits the end of the array
- If implemented correctly, the array is sorted in-place at this point

## Pseudocode

``` pseudocode
InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp
```

## Test Case Inputs and Expected Outputs

| Test Description | Test Case Input | Expected Output |
|-----|-----|-----|
| Random sorted | [8,4,23,42,16,15] | [4, 8, 15, 16, 23, 42] |
| Reverse sorted | [20,18,12,8,5,-2] | [-2, 5, 8, 12, 18, 20] |
| Few uniques | [5,12,7,5,5,7] | [5, 5, 5, 7, 7, 12] |
| Nearly sorted | [2,3,5,7,13,11] | [2, 3, 5, 7, 11, 13] |
