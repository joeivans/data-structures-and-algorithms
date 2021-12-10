const { Graph } = require('../../graph/graph');

describe('Graph business trip', function () {
  it('should pass acceptance tests', function () {
    const graph = new Graph();

    expect(graph).toBeTruthy();
  });
});
