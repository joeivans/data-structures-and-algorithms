'use strict';

/**
 * Stack abstraction.
 */
class Stack {
  #data = [];

  push(value) {
    this.#data.push(value);
  }

  pop() {
    return this.#data.pop();
  }

  peek() {
    return this.#data[this.#data.length - 1];
  }

  clear() {
    this.#data = [];
  }
}

module.exports = Stack;
