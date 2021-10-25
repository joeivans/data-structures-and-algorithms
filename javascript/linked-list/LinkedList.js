'use strict';

const Node = require('./Node');

class LinkedList {

  count = 0;
  #data = [];

  insert(value) {
    // todo: guard clauses here

    switch (this.count) {
      case 0:
        this.#data.push(new Node(value));
        break;
      default:
    }

    this.count++;
  }

  getAll() {
    return this.#data.map(_ => _.value);
  }
}

module.exports = LinkedList;
