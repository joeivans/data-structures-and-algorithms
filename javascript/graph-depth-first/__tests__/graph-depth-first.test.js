const { Graph, graphDepthFirst } = require('../graph-depth-first');

describe('Graph depth first', () => {
  it('should pass acceptance tests', () => {
    const graph = new Graph();

    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');
    const D = graph.addVertex('D');
    const E = graph.addVertex('E');
    const F = graph.addVertex('F');
    const G = graph.addVertex('G');
    const H = graph.addVertex('H');

    graph.addDirectedEdge(A, D);
    graph.addDirectedEdge(A, C);
    graph.addDirectedEdge(A, B);
    graph.addDirectedEdge(D, F);
    graph.addDirectedEdge(B, C);
    graph.addDirectedEdge(B, E);
    graph.addDirectedEdge(C, F);
    graph.addDirectedEdge(C, E);
    graph.addDirectedEdge(C, B);
    graph.addDirectedEdge(F, G);
    graph.addDirectedEdge(G, H);
    graph.addDirectedEdge(H, F);

    const stringbuilder = [];
    graph
      .breadthFirst(A)
      .forEach((_) => stringbuilder.push(_.value));

    expect(stringbuilder.join(''))
      .toBe('ADCBFEGH');

    expect(graph.size)
      .toBe(8);
  });
});
