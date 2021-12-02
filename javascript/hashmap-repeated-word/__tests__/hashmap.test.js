const HashMap = require('../hashmap');
const { repeatedWord, repeatedWordsGreatestOfAll } = require('../index');

describe('Hashmap', () => {
  const caseA = 'Once upon a time, there was a brave princess who...';
  const caseB = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
  const caseC = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

  it('should be a good abstraction of a JS Set', function () {
    const map = new HashMap();
    expect(map.contains('hello')).toEqual(false);
    expect(map.get('hello')).toEqual(undefined);
    map.add('hello', 'world');
    expect(map.contains('hello')).toEqual(true);
    expect(map.get('hello')).toEqual('world');
    map.add('hello', 'hi');
    expect(map.get('hello')).toEqual(['world', 'hi']);
    map.add('code', 'fellows');
    expect(map.getKeys()).toEqual(['hello', 'code']);
  });

  it('should pass acceptance tests', () => {
    const expectedA = 'a';
    const expectedB = 'it';
    const expectedC = 'summer';

    expect(repeatedWord(caseA)).toEqual(expectedA);
    expect(repeatedWord(caseB)).toEqual(expectedB);
    expect(repeatedWord(caseC)).toEqual(expectedC);
  });

  it('should pass stretch goal acceptance tests', function () {
    const expectedA = 'a';
    const expectedB = 'the';
    const expectedC = 'summer';

    expect(repeatedWordsGreatestOfAll(caseA)).toEqual(expectedA);
    expect(repeatedWordsGreatestOfAll(caseB)).toEqual(expectedB);
    expect(repeatedWordsGreatestOfAll(caseC)).toEqual(expectedC);
  });
});
