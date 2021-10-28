'use strict';

const Sut = require('../LinkedList.js');

/**
 * LinkedList instantiation test suite
 */
describe('LinkedList instantiation', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new Sut();
  });

  it('Can instantiate an empty linked list', () => {
    expect(linkedList.count).toBe(0);
  });
});

/**
 * LinkedList operations test suite
 */
describe('LinkedList operations', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new Sut();
  });

  it('Can insert a value', () => {
    // Arrange
    // Act
    linkedList.insert('hello');

    // Assert
    expect(linkedList.count).toBe(1);
    const getAllResult = linkedList.getAll();
    expect(getAllResult.length).toEqual(1);
    expect(getAllResult).toContain('hello');
  });

  it('Can insert multiple values', function () {
    // Arrange
    // Act
    linkedList.insert('hello');
    linkedList.insert('world');
    linkedList.insert('hi');

    // Assert
    expect(linkedList.count).toBe(3);
    const getAllResult = linkedList.getAll();
    expect(getAllResult.length).toEqual(3);
    expect(getAllResult).toContain('hello');
    expect(getAllResult).toContain('world');
    expect(getAllResult).toContain('hi');
  });

  it('Returns true when finding an existing value within the linked list', () => {
  });

  it('Returns false when finding a value that does not exist within the linked list', () => {
  });

  it('Returns a collection of all the values that exist in the linked list', () => {
  });
});

/**
 * LinkedList properties test suite
 */
describe('LinkedList properties', () => {
  test('Head property points to the first node in the linked list', () => {
  });
});
