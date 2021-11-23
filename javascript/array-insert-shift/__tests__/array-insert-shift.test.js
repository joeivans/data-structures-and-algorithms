const _ = new (require('../ArrayExtensions'))();

describe('Array insert shift', () => {
  it('should insert the new value at the array\'s midpoint', () => {
    // Given
    // When
    const result_1 = [2, 4, 6, -8].nonNativeInsertShift(5);
    const result_2 = [42, 8, 15, 23, 42].nonNativeInsertShift(16);

    // Then
    console.log(result_1);
    expect(result_1)
      .toEqual([2, 4, 5, 6, -8]);

    console.log(result_2);
    expect(result_2)
      .toEqual([42, 8, 15, 16, 23, 42]);
  });
});
