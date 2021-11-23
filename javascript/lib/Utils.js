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

  /**
   * Returns the midpoint between two numbers,
   * rounded down to the nearest integer.
   * @param a : number
   * @param b : number
   * @returns {number}
   */
  static midpointFloor(a, b) {
    let result = Utils.truncateToInteger((Math.abs(a - b)) / 2);

    if (a < b) {
      result += a;
    } else {
      result += b;
    }

    return result;
  }
}

module.exports = Utils;
