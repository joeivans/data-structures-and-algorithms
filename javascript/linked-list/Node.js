'use strict';

class Node {
  next;

  constructor(value) {
    this.value = value;
  }

  toString() {
    return `{${this.value}}`;
  }
}

module.exports = Node;
