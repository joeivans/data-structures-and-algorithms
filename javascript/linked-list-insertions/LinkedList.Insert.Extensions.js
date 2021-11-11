'use strict';

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
  let previous = null;

  for (const node of Array.from(this)) {
    // did find target
    if (node.value === target) {
      let newNode = new Node(value);

      if (!previous) {
        // need to replace head
        this.head = newNode;
        newNode.next = node;
        this.count++;
        return;
      }

      previous.next = newNode;
      newNode.next = node;
      this.count++;

      return;
    }

    previous = node;
  }
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
