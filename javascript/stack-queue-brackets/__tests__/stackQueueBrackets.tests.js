'use strict';

const StackQueueBrackets = require('../StackQueueBrackets');

describe('StackQueueBrackets', function () {
  it('should validate single bracket pairs of each of the 3 domain types', function () {
    // Given
    // When
    // Then
    expect(StackQueueBrackets.validateBrackets('()')).toBe(true);
    expect(StackQueueBrackets.validateBrackets('(Hello)')).toBe(true);
    expect(StackQueueBrackets.validateBrackets('Hello () world')).toBe(true);

    expect(StackQueueBrackets.validateBrackets('[]')).toBe(true);
    expect(StackQueueBrackets.validateBrackets('[Hello]')).toBe(true);
    expect(StackQueueBrackets.validateBrackets('Hello [] world')).toBe(true);

    expect(StackQueueBrackets.validateBrackets('{}')).toBe(true);
    expect(StackQueueBrackets.validateBrackets('{Hello}')).toBe(true);
    expect(StackQueueBrackets.validateBrackets('Hello {} world')).toBe(true);
  });

  it('should not validate mixed single bracket pairs of each of the 3 domain types', function () {
    // Given
    // When
    // Then
    expect(StackQueueBrackets.validateBrackets('(]')).toBe(false);
    expect(StackQueueBrackets.validateBrackets('[Hello}')).toBe(false);
    expect(StackQueueBrackets.validateBrackets('Hello {) world')).toBe(false);

    expect(StackQueueBrackets.validateBrackets('[)')).toBe(false);
    expect(StackQueueBrackets.validateBrackets('{Hello]')).toBe(false);
    expect(StackQueueBrackets.validateBrackets('Hello (} world')).toBe(false);

    expect(StackQueueBrackets.validateBrackets('{)')).toBe(false);
    expect(StackQueueBrackets.validateBrackets('(Hello]')).toBe(false);
    expect(StackQueueBrackets.validateBrackets('Hello [} world')).toBe(false);
  });

  it('should not validate unpaired brackets of each of the 3 domain types', function () {
    // Given
    // When
    // Then
    expect(StackQueueBrackets.validateBrackets('{()')).toBe(false);
    expect(StackQueueBrackets.validateBrackets('[Hello)]')).toBe(false);
    expect(StackQueueBrackets.validateBrackets('Hello (][) world')).toBe(false);
  });
});
