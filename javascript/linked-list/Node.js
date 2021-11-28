'use strict';

class Node {
  next;
  value;

  constructor(value) {
    this.value = value;
  }

  toString() {
    return `{${this.value}}`;
  }
}

module.exports = Node;
