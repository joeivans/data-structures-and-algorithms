const { QuickSort } = require('../index');

const intComparator = (a, b) => a - b;

describe('QuickSort', () => {
  it('should pass acceptance tests', () => {
    /*
      divide and conquer, using O(n*logn) as average-case
      time: O(n^2) worst-case
      space: in-place sort, worse-case is O(n)
     */
    const blog = [8, 4, 23, 42, 16, 15];
    const reverseSorted = [20, 18, 12, 8, 5, -2];
    const fewUniques = [5, 12, 7, 5, 5, 7];
    const nearlySorted = [2, 3, 5, 7, 13, 11];

    QuickSort(blog);
    expect(blog).toEqual(blog.sort(intComparator));

    QuickSort(reverseSorted);
    expect(reverseSorted).toEqual(reverseSorted.sort(intComparator));

    QuickSort(fewUniques);
    expect(fewUniques).toEqual(fewUniques.sort(intComparator));

    QuickSort(nearlySorted);
    expect(nearlySorted).toEqual(nearlySorted.sort(intComparator));
  });
});
