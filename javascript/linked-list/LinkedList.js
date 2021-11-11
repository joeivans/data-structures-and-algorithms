'use strict';

const Node = require('./Node');

class LinkedList {
  #head;
  count;

  constructor() {
    this.clear();
  }

  clear() {
    this.#head = null;
    this.count = 0;
  }

  includes(value) {
    for (const nodeValue of this.getAll()) {
      if (nodeValue === value) {
        return true;
      }
    }
    return false;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.#head !== null) {
      newNode.next = this.#head;
    }

    this.#head = newNode;
    this.count++;
  }

  getAllReversed() {
    return this.getAll();
  }

  toString() {
    const stringBuilder = [];

    for (const node of this.getAllReversed()) {
      stringBuilder.push(`\{${node}\}`);
    }

    stringBuilder.push('NULL');

    return stringBuilder.join('->');
  }

  getAll() {
    return Array.from(this).reverse();
  }

  * [Symbol.iterator]() {
    /*
      - Symbol.iterator sets up the iterator for the class.

      - The * before it means that this method is a generator and can use the
      `yield` keyword.
     */

    let cursor = this.#head;

    while (cursor) {
      yield cursor.value;
      cursor = cursor.next;
    }
  }
}

module.exports = LinkedList;
