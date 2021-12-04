const HashMap = require('../hashmap');

describe('Hashmap', () => {
  it('should be a good abstraction of a JS Set', () => {
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
});
