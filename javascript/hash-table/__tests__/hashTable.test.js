const { HashTable, HornerHashFunction } = require('../index');

describe('HashTable', () => {
  it('should add a kvp to the structure', () => {
    const hashTable = new HashTable();
  });
  it('should return a value by key from the structure', () => {
  });
  it('should return null for missing keys', () => {
  });
  it('should handle collisions', () => {
  });
  it('should return linked list for collision keys', () => {
    const helloResult = HornerHashFunction('hello', 2);
    const worldResult = HornerHashFunction('world', 2);
    const extraResult = HornerHashFunction('extra', 2);
    console.log(helloResult);
    console.log(worldResult);
    console.log(extraResult);
  });
  it('should hash keys to an in-range value', () => {
    const helloResult = HornerHashFunction('hello', 137);
    const worldResult = HornerHashFunction('world', 137);
    const extraResult = HornerHashFunction('extra', 137);
    console.log(helloResult);
    console.log(worldResult);
    console.log(extraResult);
  });
});
