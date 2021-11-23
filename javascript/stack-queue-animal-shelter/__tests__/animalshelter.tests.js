const {
  AnimalShelter,
  Animal,
  ANIMAL_SHELTER_PREFS_CAT,
  ANIMAL_SHELTER_PREFS_DOG,
} = require('../AnimalShelter');

describe('Animal Shelter', () => {
  it('should enqueue cats and dogs', () => {
    // Given
    const animalShelter = new AnimalShelter();
    const cat = new Animal(ANIMAL_SHELTER_PREFS_CAT);
    const dog = new Animal(ANIMAL_SHELTER_PREFS_DOG);

    // When
    animalShelter.enqueue(cat);
    animalShelter.enqueue(dog);

    // Then
    expect(animalShelter.size).toBe(2);
  });

  it('should dequeue cats only', () => {
    // Given
    const animalShelter = new AnimalShelter();
    const cat = new Animal(ANIMAL_SHELTER_PREFS_CAT);
    const dog = new Animal(ANIMAL_SHELTER_PREFS_DOG);

    // When
    animalShelter.enqueue(dog);
    animalShelter.enqueue(cat);
    animalShelter.enqueue(dog);
    const result = animalShelter.dequeue(ANIMAL_SHELTER_PREFS_CAT);

    // Then
    expect(animalShelter.size).toBe(2);
    expect(result.kind).toBe(ANIMAL_SHELTER_PREFS_CAT);
  });

  it('should dequeue dogs only', () => {
    // Given
    const animalShelter = new AnimalShelter();
    const cat = new Animal(ANIMAL_SHELTER_PREFS_CAT);
    const dog = new Animal(ANIMAL_SHELTER_PREFS_DOG);

    // When
    animalShelter.enqueue(dog);
    animalShelter.enqueue(cat);
    animalShelter.enqueue(dog);
    const result = animalShelter.dequeue(ANIMAL_SHELTER_PREFS_DOG);

    // Then
    expect(animalShelter.size).toBe(2);
    expect(result.kind).toBe(ANIMAL_SHELTER_PREFS_DOG);
  });
});
