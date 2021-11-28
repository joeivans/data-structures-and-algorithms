const LinkedList = require('../linked-list-insertions/LinkedList.Insert.Extensions');

function kthGuards(k) {
  if (k > this.count) {
    throw new Error(`K of ${k} exceeds list length of ${this.count}`);
  }

  if (k === this.count) {
    throw new Error(`K of ${k} exceeds zero-based iterations on list of length ${this.count}`);
  }

  if (k < 0) {
    throw new Error(`K of ${k} is out-of-range on list of length ${this.count}`);
  }
}

LinkedList.prototype.kthFromEnd = function (k) {
  kthGuards.call(this, k);

  let cursor = this.head;
  for (let i = 0; i < k; i++) {
    cursor = cursor.next;
  }

  return cursor.value;
};

module.exports = LinkedList;
