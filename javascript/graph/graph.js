// our data object
class Vertex {
  constructor(value) {
    this.value = value;
  }
}

// our connection from one Vertex to the other
class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

/**
 * Implements an adjacency list to store Vertices and edges
 */
class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.size = 0;
  }

  // adding a value to our adjency
  addVertex(value) {
    const payload = new Vertex(value);
    this.adjacencyList.set(payload, []);
    this.size++;

    // for simplicities sake
    return payload;
  }

  // add method should specify direct vs undirected, adding a connection between vertices
  addDirectedEdge(startVertex, endVertex, weight = 0) {
    // check if the vertex exists in our list of vertices.
    if (!this.adjacencyList.has(startVertex) && !this.adjacencyList.has(endVertex)) {
      throw new Error('Vertex Error');
    }

    // what should do to add them to our adjacency values?

    // grab all edges connected to the starting vertex
    const neighbors = this.adjacencyList.get(startVertex);

    // create a new edge from our ending vertex and push it into the list of neighbors.
    const newEdge = new Edge(endVertex, weight);
    neighbors.push(newEdge);
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('GET NEIGHBOR ERROR :: Invalid vertex');
    }

    // I don't want mutate this array
    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(startVertex) {
    const queue = [];
    const visitedNodes = new Set();

    queue.push(startVertex);
    visitedNodes.add(startVertex);

    while (queue.length) {
      const current = queue.shift();

      // I need to see all of current nodes adjecneies
      const neighbors = this.getNeighbors(current);

      for (const edge of neighbors) {
        const neighbor = edge.vertex;

        if (!visitedNodes.has(neighbor)) {
          queue.push(neighbor);
          visitedNodes.add(neighbor);
        }
      }
    }

    return visitedNodes;
  }
}


module.exports = {
  Edge, Graph, Vertex,
};
