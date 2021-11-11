'use strict';

require('../ArrayExtensions');

describe('Array binary search', function () {
  it('should find low', function () {
    expect(
      [4, 8, 15, 16, 23, 42].nonNativeBinarySearch(15))
      .toEqual(2);
  });

  it('should find high', function () {
    expect(
      [-131, -82, 0, 27, 42, 68, 179].nonNativeBinarySearch(42))
      .toEqual(4);
  });

  it('should not find high', function () {
    expect(
      [11, 22, 33, 44, 55, 66, 77].nonNativeBinarySearch(90))
      .toEqual(-1);
  });

  it('should not find medium', function () {
    expect(
      [1, 2, 3, 5, 6, 7].nonNativeBinarySearch(4))
      .toEqual(-1);
  });
});
