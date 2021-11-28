const LinkedList = require('../LinkedList.js');

/**
 * LinkedList instantiation test suite
 */
describe('LinkedList instantiation', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
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
    linkedList = new LinkedList();
  });

  it('Can insert a value', () => {
    linkedList.insert('hello');

    expect(linkedList.count).toBe(1);
    const getAllResult = linkedList.getAll();
    expect(getAllResult.length).toEqual(1);
    expect(getAllResult).toContain('hello');
    expect(linkedList.toString()).toEqual('{hello}->NULL');
  });

  it('Can insert multiple values', () => {
    linkedList.insert('hello');
    linkedList.insert('world');
    linkedList.insert('hi');

    expect(linkedList.count).toEqual(3);
    const getAllResult = linkedList.getAll();
    expect(getAllResult.length).toEqual(3);
    expect(getAllResult).toContain('hello');
    expect(getAllResult).toContain('world');
    expect(getAllResult).toContain('hi');
    expect(linkedList.toString()).toEqual('{hello}->{world}->{hi}->NULL');
  });

  it('Returns true when finding an existing value within the linked list', () => {
    linkedList.insert('hello');
    linkedList.insert('world');
    expect(linkedList.includes('hello')).toEqual(true);
    expect(linkedList.toString()).toEqual('{hello}->{world}->NULL');

    linkedList.clear();
    linkedList.insert('hello');
    expect(linkedList.includes('hello')).toEqual(true);
    expect(linkedList.toString()).toEqual('{hello}->NULL');
  });

  it('Returns false when finding a value that does not exist within the linked list', () => {
    linkedList.clear();
    linkedList.insert('world');
    expect(linkedList.includes('hello')).toEqual(false);
    expect(linkedList.toString()).toEqual('{world}->NULL');

    linkedList.clear();
    expect(linkedList.includes('hello')).toEqual(false);
    expect(linkedList.toString()).toEqual('NULL');
  });

  it('Returns a collection of all the values that exist in the linked list', () => {
    linkedList.insert('hello');
    linkedList.insert('world');
    expect(linkedList.getAll()).toEqual(['world', 'hello']);
    expect(linkedList.toString()).toEqual('{hello}->{world}->NULL');

    linkedList.clear();
    linkedList.insert('hello');
    expect(linkedList.getAll()).toEqual(['hello']);
    expect(linkedList.toString()).toEqual('{hello}->NULL');

    linkedList.clear();
    expect(linkedList.getAll()).toEqual([]);
    expect(linkedList.toString()).toEqual('NULL');
  });

  it('should return an in-order formatted toString value', () => {
    linkedList.insert('hello');
    linkedList.insert('world');
    const toStringResult = linkedList.toString();
    expect(toStringResult).toEqual('{hello}->{world}->NULL');
  });
});
