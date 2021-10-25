'use strict';

class Node {
  value = null;
  next = null;

  constructor(value) {
    // todo: guard clauses here
    this.value = value;
  }

  setNext(next) {
    // todo: guard clauses here
    this.next = next;
  }
}

module.exports = Node;
