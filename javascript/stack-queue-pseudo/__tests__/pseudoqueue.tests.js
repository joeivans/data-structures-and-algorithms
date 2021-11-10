'use strict';

const PseudoQueue = require('../index');

describe('PseudoQueue Tests', function () {
  it('should enqueue 1', function () {
    // Given
    const queue = new PseudoQueue();
    const data = 'hello';

    // When
    queue.enqueue(data);

    // Then
    expect(queue.size).toBe(1);
  });

  it('should dequeue 1', function () {
    // Given
    const queue = new PseudoQueue();
    const data = 'hello';

    // When
    queue.enqueue(data);
    const result = queue.dequeue();

    // Then
    expect(result).toBe(data);
  });

  it('should enqueue 2', function () {
    // Given
    const queue = new PseudoQueue();
    const data = ['hello', 'world'];

    // When
    queue.enqueue(data[0]);
    queue.enqueue(data[1]);

    // Then
    expect(queue.size).toBe(2);
  });

  it('should dequeue 2', function () {
    // Given
    const queue = new PseudoQueue();
    const data = ['hello', 'world'];

    // When
    queue.enqueue(data[0]);
    queue.enqueue(data[1]);
    const result1 = queue.dequeue();
    const result2 = queue.dequeue();

    // Then
    expect(result1).toBe(data[0]);
    expect(result2).toBe(data[1]);
  });

  it('should enqueue, dequeue some, enqueue, dequeue remaining', function () {
    // Given
    const queue = new PseudoQueue();
    const data = ['a', 'b', 'c', 'd'];

    // When
    queue.enqueue(data[0]);
    queue.enqueue(data[1]);
    const result1 = queue.dequeue();
    queue.enqueue(data[2]);
    queue.enqueue(data[3]);
    const result2 = queue.dequeue();
    const result3 = queue.dequeue();
    const result4 = queue.dequeue();

    // Then
    expect(result1).toBe(data[0]);
    expect(result2).toBe(data[1]);
    expect(result3).toBe(data[2]);
    expect(result4).toBe(data[3]);
  });

  it('should throw error on empty dequeue', function () {
    // Given
    const emptyQueue = new PseudoQueue();

    // When
    // Then
    expect(() => emptyQueue.dequeue()).toThrow(new Error('Nothing to dequeue'));
  });
});
