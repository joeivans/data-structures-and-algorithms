'use strict';

class Node {
  constructor(value, k = 0) {
    this.value = value;
    this.children = new Array(k);
  }
}

class KaryTree {
  constructor(k) {
    this.k = k;
    this.root = null;
  }

  /**
   * Performs a breadth-first traversal.
   * @param root
   * @param callbackWithValue
   */
  breadthFirst(root, callbackWithValue) {
    callbackWithValue(`'I'll try this soon`);
  }
}

module.exports = {
  Node,
  KaryTree
};
