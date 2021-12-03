const { Node, KaryTree } = require('./KaryTree');

const tree = new KaryTree(6);

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');

tree.root = D;
D.left = B;
B.left = A;
B.right = C;
D.right = E;
E.right = F;

const stringBuilder = [];
tree.breadthFirst(tree.root, (value) => stringBuilder.push(value));
console.log(`Preorder result: ${stringBuilder.join(', ')}`);
