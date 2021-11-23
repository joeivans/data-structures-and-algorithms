// just want to auto-load the extensions
const _ = new (require('../ArrayExtensions'))();

describe('Array', () => {
  it('`nonNativeReverse` extension should reverse its elements', () => {
    // Given
    const input = [1, 2, 3, 4];

    // When
    const result = input.nonNativeReverse();

    // Then
    expect(JSON.stringify(result)).toBe('[4,3,2,1]');
  });

  it('should have an `each` function extension', () => {
    // Given
    const input = [1, 2, 3, 4];
    const result = [];

    // When
    input.each((element) => {
      result.push(element + 4);
    });

    // Then
    expect(JSON.stringify(result)).toBe('[5,6,7,8]');
  });
});
