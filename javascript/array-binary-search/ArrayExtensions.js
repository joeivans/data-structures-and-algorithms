const NOT_FOUND = -1;
const Utils = require('../lib/Utils');

class ArrayExtensions {
  constructor() {
    this.initExtensions();
  }

  initExtensions() {
    /**
     * Assume the array is sorted.
     * @param target : number
     * @returns {number}
     */
    Array.prototype.nonNativeBinarySearch = function (target) {
      let low = 0;
      let high = this.length - 1;
      let cursor = Utils.midpointFloor(low, high);

      while (low !== cursor && cursor !== high) {
        if (this[cursor] === target) {
          return cursor;
        }

        if (target > this[cursor]) {
          low = cursor + 1;
        } else {
          high = cursor - 1;
        }
        cursor = Utils.midpointFloor(high, low);
      }

      if (this[cursor] === target) {
        return cursor;
      }

      return NOT_FOUND;
    };
  }
}

module.exports = {
  Constants: {
    NOT_FOUND,
  },
  ArrayExtensions: (() => new ArrayExtensions())(),
};
