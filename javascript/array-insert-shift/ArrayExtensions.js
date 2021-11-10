'use strict';

class Utils {
  /**
   * Keep only the whole number portion of a number.
   * @param value : number
   * @returns {number}
   */
  static truncateToInteger(value) {
    return Math.trunc(value);
  }

  /**
   * True if the number is even.
   * @param value : number
   * @returns {boolean}
   */
  static isEven(value) {
    return value % 2 === 0;
  }
}

class ArrayExtensions {
  constructor() {
    Array.prototype.nonNativeInsertShift = function (value) {
      const result = [];
      const midpoint = Utils.truncateToInteger(this.length / 2);
      const isEven = Utils.isEven(this.length);

      const determinePreOrPostInsertion = function (i) {
        if (isEven) {
          result.push(value);
          result.push(this[i]);
        } else {
          result.push(this[i]);
          result.push(value);
        }
      };

      for (let i = 0; i < this.length; i++) {
        if (i === midpoint) {
          determinePreOrPostInsertion.call(this, i);
        } else {
          result.push(this[i]);
        }
      }

      return result;
    };
  }
}

module.exports = ArrayExtensions;
