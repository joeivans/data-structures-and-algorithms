const LinkedList = require('../linked-list/LinkedList');

const STARTING_LENGTH = 137;

function tryReallocateArray() {
  if (this.length % STARTING_LENGTH === 0) {
    this.collection.length = getNextPrime(this.collection.length);
  }
}

function isPrime(n) {
  switch (n) {
    case n <= 1:
    case n %2 === 0 || n %3 === 0:
      return false;
    case n <= 3:
      return true;
  }

  for (let i = 5; i * i < n; i += 6) {
    if (n %i === 0 || n %(i + 2) == 0) {
      return false;
    }
  }

  return true;
}

function getNextPrime(n) {
  if (n <= 1) {
    return 2;
  }

  let prime = n;
  let found = false;

  while (!found) {
    if (isPrime(prime++)){
      found = true;
    }
  }

  return prime;
}

/**
 * Implements Horner's ASCII hash function.
 * The hash function used to hash object keys.
 * @param {any} key The value to be hashed.
 * @param {number} maxN The max length of the backing data array.
 * @param {number} smallPrime The prime number used to compute a hash value based. Use a small number. 37 is default.
 * @returns {number} The hash of the object key.
 */
const hornerHashFunction = function hashFunction(key, maxN, smallPrime = 37) {
  const hashInput = key.toString();

  let total = 0;

  for (let i = 0; i < hashInput.length; i++) {
    total += smallPrime * total + hashInput.charCodeAt(i);
  }

  total %= maxN;

  return parseInt(total);
};


class HashTable {
  /**
   * The backing collection.
   * @type {*[]}
   */
  collection = new Array(STARTING_LENGTH);

  /**
   * The number of memory cells in use.
   * @type {number}
   */
  #allocationCount = 0;

  /**
   * Hash the key and add the key and value pair to the hash table.
   * Collisions are stored as linked lists under the collision key.
   * Hash is created from the object's toString() implementation.
   * To minimize collisions, override the toString() method for custom objects.
   * @param {any} key The key for the value to store.
   * @param {any} value The value to be stored by key.
   * @returns {void}
   */
  add(key, value) {
    this.#allocationCount++;
    tryReallocateArray.call(this);
  }

  /**
   * Try to get a value by key.
   * Collisions are stored as linked lists under the collision key.
   * You may get the value you expected or you may get a list of collided values.
   * @param {any} key The lookup key.
   * @returns {*||LinkedList<*>} The value associated with the key in the hash table.
   */
  get(key) {

  }

  /**
   * Check if the hash table contains an entry for the given key.
   * @param {key} key The lookup key.
   * @returns {Boolean} True if the key exists in the table. Otherwise, false.
   */
  contains(key) {

  }

  /**
   * Hash the key.
   * This function delegates hashing to the exported HashFunction.
   * @param {any} key The value to be hashed.
   * @returns {string} The index in the collection for the given key.
   */
  hash(key) {
    const hash = hashFunction(key);
    //
    return hash;
  }
}

module.exports = {
  HashTable,
  HornerHashFunction: hornerHashFunction
};
