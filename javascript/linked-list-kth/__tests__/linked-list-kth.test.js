const LinkedList = require('../LinkedList.Kth.Extensions');

describe('Linked list kth retrieval', () => {
  test('should return 2 for k <- 0 on list {1}->{3}->{8}->{2}->NULL', () => {
    const list = new LinkedList()
      .insert(1)
      .insert(3)
      .insert(8)
      .insert(2);

    expect(list.kthFromEnd(0)).toEqual(2);
  });

  test('should return 3 for k <- 2 on list {1}->{3}->{8}->{2}->NULL', () => {
    const list = new LinkedList()
      .insert(1)
      .insert(3)
      .insert(8)
      .insert(2);

    expect(list.kthFromEnd(2)).toEqual(3);
  });

  test('should throw exception for k <- 6 on list {1}->{3}->{8}->{2}->NULL', () => {
    const list = new LinkedList()
      .insert(1)
      .insert(3)
      .insert(8)
      .insert(2);

    expect(() => list.kthFromEnd(6)).toThrow(new Error('K of 6 exceeds list length of 4'));
  });

  it('should throw when k is greater than the length of the linked list', () => {
    const list = new LinkedList()
      .insert(1)
      .insert(2)
      .insert(3);

    expect(() => list.kthFromEnd(4)).toThrow(new Error('K of 4 exceeds list length of 3'));
  });

  it('should throw when k and the length of the list are the same', () => {
    const list = new LinkedList()
      .insert(1)
      .insert(2)
      .insert(3);

    expect(() => list.kthFromEnd(3)).toThrow(new Error('K of 3 exceeds zero-based iterations on list of length 3'));
  });

  it('should throw when k is not a positive integer', () => {
    const list = new LinkedList()
      .insert(1)
      .insert(2)
      .insert(3);

    expect(() => list.kthFromEnd(-1)).toThrow(new Error('K of -1 is out-of-range on list of length 3'));
  });

  it('should return only member when linked list is of size 1', () => {
    const list = new LinkedList()
      .insert(1);

    expect(list.kthFromEnd(0)).toEqual(1);
  });

  it('should satisfy the happy path where k is not at the end but somewhere in the middle of the linked list', () => {
    const list = new LinkedList()
      .insert(1)
      .insert(2)
      .insert(3);

    expect(list.kthFromEnd(1)).toEqual(2);
  });
});
