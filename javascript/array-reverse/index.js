'use strict';

// Auto-load the Array class extensions
const _ = new (require('./ArrayExtensions'))();

console.log('Demonstrating string `each` extension');
console.log(JSON.stringify([1, 2, 3, 4].each((element) => console.log(element))));

console.log('Demonstrating string `reverse` extension');
console.log(JSON.stringify([1, 2, 3, 4].nonNativeReverse()));
