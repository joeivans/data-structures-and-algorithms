const {Graph} = require('../../graph/graph');

describe('Graph', () => {
  it('should pass acceptance tests', () => {
    const graph = new Graph();

    const pandora = graph.addVertex('pandora');
    const arendelle = graph.addVertex('arendelle');
    const metroville = graph.addVertex('metroville');
    const monstropolis = graph.addVertex('monstropolis');
    const narnia = graph.addVertex('narnia');
    const naboo = graph.addVertex('naboo');

    graph.addDirectedEdge(pandora, arendelle);
    graph.addDirectedEdge(arendelle, metroville);
    graph.addDirectedEdge(arendelle, monstropolis);
    graph.addDirectedEdge(metroville, monstropolis);
    graph.addDirectedEdge(metroville, narnia);
    graph.addDirectedEdge(metroville, naboo);
    graph.addDirectedEdge(narnia, naboo);

    const stringbuilder = [];
    graph
      .breadthFirst(pandora)
      .forEach(_ => stringbuilder.push(_.value));

    expect(graph.size)
      .toBe(6);

    expect(stringbuilder.join(''))
      .toBe('pandoraarendellemetrovillemonstropolisnarnianaboo');
  });
});
