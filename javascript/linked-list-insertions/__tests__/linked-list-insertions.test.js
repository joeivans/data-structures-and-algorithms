const LinkedList = require('../LinkedList.Insert.Extensions');

describe('LinkedList Insertions', () => {
  it('should append to empty list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.count).toEqual(0);

    linkedList.append('hello');
    expect(linkedList.count).toEqual(1);
    expect(linkedList.toString()).toEqual('{hello}->NULL');
  });

  it('should append to non-empty list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.count).toEqual(0);
    expect(linkedList.toString()).toEqual('NULL');

    linkedList.insert('hello');
    expect(linkedList.count).toEqual(1);
    expect(linkedList.toString()).toEqual('{hello}->NULL');

    linkedList.append('world');
    expect(linkedList.count).toEqual(2);
    expect(linkedList.toString()).toEqual('{hello}->{world}->NULL');
  });

  it('should insert before target that exists', () => {
    const linkedList = new LinkedList();

    linkedList.insert('world');
    linkedList.insertBefore('world', 'hello');

    expect(linkedList.count).toEqual(2);
    expect(linkedList.toString()).toEqual('{hello}->{world}->NULL');
  });

  it('should insert before target that exists, n is large', () => {
    const linkedList = new LinkedList();

    linkedList.insert('a');
    linkedList.insert('b');
    linkedList.insert('c');
    linkedList.insert('e');
    linkedList.insert('f');
    linkedList.insert('g');
    linkedList.insert('h');
    linkedList.insertBefore('e', 'd');

    expect(linkedList.count).toEqual(8);
    expect(linkedList.toString()).toEqual('{a}->{b}->{c}->{d}->{e}->{f}->{g}->{h}->NULL');
  });

  it('should insert before (append) target that doesn\'t exist', () => {
    const linkedList = new LinkedList();

    linkedList.insertBefore('world', 'hello');

    expect(linkedList.count).toEqual(1);
    expect(linkedList.getAll()).toEqual(['hello']);
    expect(linkedList.toString()).toEqual('{hello}->NULL');
  });
});
