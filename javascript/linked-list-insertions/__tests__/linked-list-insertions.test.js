'use strict';

const LinkedList = require('../LinkedList.Insert.Extensions');

describe('LinkedList Insertions', function () {
  it('should append to empty list', function () {
    const linkedList = new LinkedList();

    expect(linkedList.count).toEqual(0);

    linkedList.append('hello');
    expect(linkedList.count).toEqual(1);
  });

  it('should append to non-empty list', function () {
    const linkedList = new LinkedList();

    expect(linkedList.count).toEqual(0);

    linkedList.insert('hello');
    expect(linkedList.count).toEqual(1);

    linkedList.append('world');
    expect(linkedList.count).toEqual(2);
  });

  it('should insert before target that exists', function () {
    const linkedList = new LinkedList();

    linkedList.insert('world');
    linkedList.insertBefore('world', 'hello');

    expect(linkedList.count).toEqual(2);
    expect(linkedList.getAll()).toEqual(['hello', 'world']);
  });

  it('should insert before (append) target that doesn\'t exist', function () {
    const linkedList = new LinkedList();

    linkedList.insertBefore('world', 'hello');

    expect(linkedList.count).toEqual(1);
    expect(linkedList.getAll()).toEqual(['world']);
  });
});
