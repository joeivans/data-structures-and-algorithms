const { Tree, Leaf, treeIntersection } = require('../index');

describe('Tree intersection', () => {
  it('should pass acceptance tests', () => {
    // Plant a tree
    const treeA = new Tree();
    const treeB = new Tree();

    // Add test leaves in-order
    const A_150 = new Leaf(150);
    const A_100 = new Leaf(100);
    const A_75 = new Leaf(75);
    const A_160 = new Leaf(160);
    const A_125 = new Leaf(125);
    const A_175 = new Leaf(175);
    const A_250 = new Leaf(250);
    const A_200 = new Leaf(200);
    const A_350 = new Leaf(350);
    const A_300 = new Leaf(300);
    const A_500 = new Leaf(500);

    treeA.root = A_150;
    A_150.left = A_100;
    A_100.left = A_75;
    A_100.right = A_160;
    A_160.left = A_125;
    A_160.right = A_175;
    A_150.right = A_250;
    A_250.left = A_200;
    A_250.right = A_350;
    A_350.left = A_300;
    A_350.right = A_500;

    // Add test leaves in-order
    const B_42 = new Leaf(42);
    const B_100 = new Leaf(100);
    const B_15 = new Leaf(15);
    const B_160 = new Leaf(160);
    const B_125 = new Leaf(125);
    const B_175 = new Leaf(175);
    const B_600 = new Leaf(600);
    const B_200 = new Leaf(200);
    const B_350 = new Leaf(350);
    const B_4 = new Leaf(4);
    const B_500 = new Leaf(500);

    treeB.root = B_42;
    B_42.left = B_100;
    B_100.left = B_15;
    B_100.right = B_160;
    B_160.left = B_125;
    B_160.right = B_175;
    B_42.right = B_600;
    B_600.left = B_200;
    B_600.right = B_350;
    B_350.left = B_4;
    B_350.right = B_500;

    expect(treeA.toString()).toEqual('150->,100->,75->,160->,125->,175->,250->,200->,350->,300->,500->,NULL');
    expect(treeB.toString()).toEqual('42->,100->,15->,160->,125->,175->,600->,200->,350->,4->,500->,NULL');

    // should be join on matching nodes, array
    const actual_result = treeIntersection(treeA, treeB);
    const expected_result = [100, 125, 160, 175, 200, 350, 500];

    expect(actual_result).toEqual(expected_result);
  });
});
