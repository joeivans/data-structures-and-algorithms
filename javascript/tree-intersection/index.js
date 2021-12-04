const { BinaryTree, Node } = require('../binary-trees/BinaryTree');
const HashMap = require('../hashmap/hashmap');

function treeIntersection(treeA, treeB) {
  const mapTreeA = new HashMap();
  const mapTreeB = new HashMap();

  const result = [];

  treeA.inOrder(
    treeA.root,
    (value) => {
      mapTreeA.add(
        value,
        value,
        (_) => value,
      );
    },
  );

  treeB.inOrder(
    treeB.root,
    (value) => {
      mapTreeB.add(
        value,
        value,
        (_) => value,
      );
    },
  );

  for (const key of mapTreeA.getKeys()) {
    if (mapTreeB.contains(key)) {
      result.push(Number(key));
    }
  }

  return result;
}

module.exports = {
  Tree: BinaryTree,
  Leaf: Node,
  treeIntersection,
};
