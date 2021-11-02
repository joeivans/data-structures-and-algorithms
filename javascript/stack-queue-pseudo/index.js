'use strict';

class PseudoQueue {
  #forward = [];
  #backward = [];
  size = 0;

  enqueue(data) {
    const newForward = [];
    const newBackward = [];

    let _data = this.#forward.pop();
    while (_data) {

      _data = this.#forward.pop();
    }

    this.#forward = newForward;
    this.#backward = newBackward;
    this.size++;
  }

  dequeue() {
    const result = this.#forward[0];
    this.size--;

    return result;
  }
}

module.exports = PseudoQueue;
