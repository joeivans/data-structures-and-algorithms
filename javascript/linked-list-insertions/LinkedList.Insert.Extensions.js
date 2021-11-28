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

  const shouldInsertBeforeSingleElementList = this.head && !this.head.next && this.head.value === target;

  if (shouldInsertBeforeSingleElementList) {
    const node = new Node(value);

    this.head.next = node;
    this.count++;

    return;
  }

  let found = false;
  let previous = null;
  let cursor = this.head;

  while (cursor) {
    if (previous && previous.value === target) {
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

  if (!found) {
    this.append(value);
  }
};

/**
 * If target exists, insert value after it.
 * Otherwise, append value to the end of the list.
 * @param target
 * @param value
 */
LinkedList.prototype.insertAfter = function (target, value) {
  const listIsEmpty = !this.head;
  const listIsSingleNode = this.head && !this.head.next && this.head.value === target;

  if (listIsEmpty || listIsSingleNode) {
    this.append(value);
    return;
  }

  let found = false;
  let previous = null;
  let cursor = this.head;

  while (cursor) {
    if (cursor.value === target) {
      found = true;

      const node = new Node(value);

      previous.next = node;
      node.next = cursor;

      this.count++;

      return;
    }

    previous = cursor;
    cursor = cursor.next;
  }

  if (!found) {
    this.append(value);
  }
};

module.exports = LinkedList;
