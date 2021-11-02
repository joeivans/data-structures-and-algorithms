'use strict';

class PseudoQueue {
  #DEFAULT_SIZE = 0;
  #stackIn = [];
  #stackOut = [];

  size = this.#DEFAULT_SIZE;

  enqueue(data) {
    this.#stackIn.push(data);
    this.size++;
  }

  dequeue() {
    if (this.size === this.#DEFAULT_SIZE) {
      throw new Error('Nothing to dequeue');
    }

    while (this.#stackIn.length) {
      let popped = this.#stackIn.pop();
      this.#stackOut.push(popped);
    }

    const result = this.#stackOut.pop();

    while (this.#stackOut.length) {
      let popped = this.#stackOut.pop();
      this.#stackIn.push(popped);
    }

    this.size--;
    return result;
  }
}

module.exports = PseudoQueue;
