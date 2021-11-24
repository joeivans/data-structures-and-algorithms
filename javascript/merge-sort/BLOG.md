# Merge Sort

## Introduction To Merge Sort

The goal of merge sort is to sort an array at O(n log n) complexity.

The algorithm is actually quite complex but very efficient:

- If the array is of size 1 or less, return it because it is already sorted
- Split the array in half
- Continue splitting the array in half until there is only size 2 array to compare and swap if necessary
- After the first round of swaps, merge the halves by comparing left and right halves
- Left@{Index0} compares and swaps with Right@{Index0}, then Right@{Index1}, etc. until the halves are both sorted
- Merge the sorted halves together

## Pseudocode

``` pseudocode
This is really ugly pseudocode provided, not much pseudo going on
Mergesort is complex enough to look at
The third parameter in merge method seems unnecessary

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## Test Case Inputs and Expected Outputs

| Test Description | Test Case Input | Expected Output |
|-----|-----|-----|
| Size one | [1] | [1] |
| Size two | [2, 1] | [1, 2] |
| Random sorted | [8, 4, 23, 42, 16, 15] | [4, 8, 15, 16, 23, 42] |
| Reverse sorted | [20, 18, 12, 8, 5, -2] | [-2, 5, 8, 12, 18, 20] |
| Few uniques | [5, 12, 7, 5, 5, 7] | [5, 5, 5, 7, 7, 12] |
| Nearly sorted | [2, 3, 5, 7, 13, 11] | [2, 3, 5, 7, 11, 13] |
