'use strict';

/*
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
*/

/**
 * Is the array too small to sort? If so, it is already sorted.
 * @param {*[]} array The input array to check the size of.
 * @returns {boolean} Returns true if array is size 1 or less.
 */
function tooSmallToSort(array) {
  const minArrayLength = 1;

  return array.length <= minArrayLength;
}

/**
 * Uses an O(n log n) divide-and-conquer strategy.
 * @param {*[]} array The input array.
 * @returns {{[], []}} Returns the left and right slices of the split input
 * array.
 */
function divideAndConquer(array) {
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return {left, right};
}

/**
 * Performs a merge sort in O(n log n) time and O(n) space complexity.
 * @param array The input array to sort.
 * @returns {*[]} Returns the input array with elements sorted
 * least-to-greatest in value.
 */
function mergeSort(array) {
  if (tooSmallToSort(array)) {
    return array;
  }

  const {left, right} = divideAndConquer(array);

  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

/**
 * Space is O(n) because we're copying the whole array once and shifting
 * contents around.
 * @param {*[]} left The left input array slice.
 * @param {*[]} right The right input array slice.
 * @returns {*[]} The merged sort of the input arrays.
 */
function merge(left, right) {
  const result = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }

  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

module.exports = mergeSort;
