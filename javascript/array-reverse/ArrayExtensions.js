'use strict';

class ArrayExtensions {
  constructor() {
    /**
     * Return an array with the elements reversed.
     * @returns {*[]} reversed array
     */
    Array.prototype.nonNativeReverse = function () {
      const result = [];

      for (let i = 0; i < this.length / 2; i++) {
        const cursor = this[i];
        result[i] = this[this.length - 1 - i];
        result[this.length - 1 - i] = cursor;
      }

      return result;
    };

    /**
     * @param callback : function
     */
    Array.prototype.each = function (callback) {
      for (const element of this) {
        callback(element);
      }
    };
  }
}

module.exports = ArrayExtensions;
