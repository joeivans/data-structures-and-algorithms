'use strict';

/*
  Write a function called validate brackets

  Arguments: string

  Return: boolean
    - representing whether or not the brackets in the string
      are balanced

  There are 3 types of brackets:
    - Round Brackets : ()
    - Square Brackets : []
    - Curly Brackets : {}
*/

const Stack = require('./Stack');

/**
 * Encapsulates a bracket.
 */
class Bracket {
  static KIND_OPEN = 'open';
  static KIND_CLOSE = 'close';

  kind;
  value;

  constructor(char) {
    if (Bracket.isBracketOpen(char)) {
      this.kind = Bracket.KIND_OPEN;
    } else if (Bracket.isBracketClose(char)) {
      this.kind = Bracket.KIND_CLOSE;
    }

    this.value = char;
  }

  /**
   * Bracket test.
   * @param char
   * @returns {boolean}
   */
  static isBracket(char) {
    switch (char) {
      case '(':
      case ')':
      case '[':
      case ']':
      case '{':
      case '}':
        return true;
      default:
        return false;
    }
  }

  /**
   * Opening bracket test.
   * @param char
   * @returns {boolean}
   */
  static isBracketOpen(char) {
    switch (char) {
      case '(':
      case '[':
      case '{':
        return true;
      default:
        return false;
    }
  }

  /**
   * Closing bracket test.
   * @param char
   * @returns {boolean}
   */
  static isBracketClose(char) {
    switch (char) {
      case ')':
      case ']':
      case '}':
        return true;
      default:
        return false;
    }
  }

  isClosingPair(char) {
    switch (char) {
      case ')':
        return this.value === '(';
      case ']':
        return this.value === '[';
      case '}':
        return this.value === '{';
      default:
        return false;
    }
  }
}

class StackQueueBrackets {
  static validateBrackets(str) {
    const stack = new Stack();
    for (const char of str) {
      if (Bracket.isBracketOpen(char)) {
        stack.push(new Bracket(char));
      } else if (Bracket.isBracketClose(char)) {
        const topOfStack = stack.peek();
        if (topOfStack && topOfStack.kind === Bracket.KIND_OPEN && topOfStack.isClosingPair(char)) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    return stack.peek() === undefined;
  }
}

module.exports = StackQueueBrackets;
