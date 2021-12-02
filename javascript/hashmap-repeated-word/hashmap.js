class HashMap {
  #set = {};

  defaultAction(key, value) {
    if (!this.#set[key]) {
      return value;
    }

    return [this.#set[key], value]
  }

  add(key, value, setter = this.defaultAction.bind(this)) {
    this.#set[key] = setter(key, value);
  }

  get(key) {
    return this.#set[key] ? this.#set[key] : undefined;
  }

  getKeys() {
    return Object.keys(this.#set);
  }

  contains(key) {
    return this.#set[key] !== undefined;
  }

  toString() {
    return JSON.stringify(this.#set);
  }
}

module.exports = HashMap;
