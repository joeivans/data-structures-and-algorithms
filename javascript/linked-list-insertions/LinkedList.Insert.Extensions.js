const LinkedList = require('../linked-list/LinkedList');
const Node = require('../linked-list/Node');

/**
 * Appends value to the end of the linked list
 * @param value The value to append
 */
LinkedList.prototype.append = function (value) {
  this.insert(value);
};

/**
 * If target exists, insert value before it.
 * Otherwise, append value to the end of the list.
 * @param target
 * @param value
 */
LinkedList.prototype.insertBefore = function (target, value) {
  if (!this.head) {
    this.append(value);
    return;
  }

  if (this.head && !this.head.next && this.head.value === target) {
    const node = new Node(value);
    const _ = this.head;
    this.head = node;
    node.next = _;
    this.count++;
    return;
  }

  let previous = null;
  let cursor = this.head;
  let found = false;

  console.log(cursor.value);
  // finds e
  // previous is f
  // next is c
  while (cursor) {
    if (cursor.value === target) {
      found = true;
      const _ = cursor;
      const node = new Node(value);

      previous.next = node;
      node.next = _;

      this.count++;
    }

    previous = cursor;
    cursor = cursor.next;
  }

  // if (!found) {
  //   this.append(value);
  // }
};

/**
 * If target exists, insert value after it.
 * Otherwise, append value to the end of the list.
 * @param target
 * @param value
 */
LinkedList.prototype.insertAfter = function (target, value) {
  //
};

module.exports = LinkedList;
