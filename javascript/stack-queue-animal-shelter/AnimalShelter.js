'use strict';

/*
  Create a class called AnimalShelter which holds only dogs and cats.
  The shelter operates using a first-in, first-out approach.

  Implement the following methods:

  enqueue
  - Arguments: animal
    - animal can be either a dog or a cat object.
  dequeue
  - Arguments: pref
    - pref can be either "dog" or "cat"
    - Return: either a dog or a cat, based on preference.
      - If pref is not "dog" or "cat" then return null.
 */

const ANIMAL_SHELTER_PREFS_CAT = 'cat';
const ANIMAL_SHELTER_PREFS_DOG = 'dog';

class Animal {
  kind;

  constructor(kind) {
    Animal.validate(kind);

    this.kind = kind;
  }

  static validate(kind) {
    if (kind !== ANIMAL_SHELTER_PREFS_CAT && kind !== ANIMAL_SHELTER_PREFS_DOG) {
      throw new Error('Animal kind is required on construction and is limited '
        + `to the following: ${ANIMAL_SHELTER_PREFS_CAT}, ${ANIMAL_SHELTER_PREFS_DOG}`);
    }
  }
}

class AnimalShelter {
  #animals = [];
  size = 0;

  enqueue(animal) {
    this.#animals.push(animal);
    this.size++;
  }

  dequeue(pref) {
    const result = this.traverseAnimals(pref);

    if (result) {
      this.size--;
    }

    return result;
  }

  traverseAnimals(targetKind) {
    for (const animal of this.#animals) {
      if (animal.kind === targetKind) {
        return animal;
      }
    }

    return this.#animals[this.#animals.length - 1];
  }
}

module.exports = {
  AnimalShelter,
  Animal,
  ANIMAL_SHELTER_PREFS_CAT,
  ANIMAL_SHELTER_PREFS_DOG,
};
