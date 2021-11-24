'use strict';

const {mergeSort} = require('./index.js');

describe('Merge sort', () => {
  it('should sort the first test case', function () {
    const sizeOne = [1];
    const sizeTwo = [2, 1];
    const randomSorted = [8, 4, 23, 42, 16, 15];
    const reverseSorted = [20, 18, 12, 8, 5, -2];
    const fewUniques = [5, 12, 7, 5, 5, 7];
    const nearlySorted = [2, 3, 5, 7, 13, 11];

    expect(mergeSort(sizeOne)).toEqual([1]);
    expect(mergeSort(sizeTwo)).toEqual([1, 2]);
    expect(mergeSort(randomSorted)).toEqual([4, 8, 15, 16, 23, 42]);
    expect(mergeSort(reverseSorted)).toEqual([-2, 5, 8, 12, 18, 20]);
    expect(mergeSort(fewUniques)).toEqual([5, 5, 5, 7, 7, 12]);
    expect(mergeSort(nearlySorted)).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
