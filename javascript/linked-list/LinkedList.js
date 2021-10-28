'use strict';

const linkedListNode = require('./LinkedListNode');

class LinkedList {

  #head = null;
  #tail = null;
  count = 0;

  insert(value) {
    const newNode = new linkedListNode(value);

    if (this.#head === null) {
      this.#head = newNode;
    } else {
      this.#tail.next = newNode;
    }

    this.#tail = newNode;
    this.count++;
  }

  getAll() {
    return Array.from(this);
  }

  * [Symbol.iterator]() {
    let cursor = this.#head;

    while (cursor) {
      yield cursor.value;
      cursor = cursor.next;
    }
  }
}

module.exports = LinkedList;
