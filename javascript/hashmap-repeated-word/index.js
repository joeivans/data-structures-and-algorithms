const HashMap = require('../hashmap/hashmap');

function stripExtraChars(strIn) {
  return strIn.replace(/[,.]/g, '');
}

function repeatedWord(strIn) {
  const map = new HashMap();

  for (const word of strIn.split(' ')) {
    const _word = stripExtraChars(word.toLowerCase());

    if (!map.contains(_word)) {
      map.add(_word, 1, (key, value) => value);
    } else {
      return _word;
    }
  }

  return map.getKeys()[0];
}

function repeatedWordsGreatestOfAll(strIn) {
  const map = new HashMap();
  let greatestValue = 0;
  let greatestKey;

  // trying to avoid 2n time for performance on low-end of n
  for (const word of strIn.split(' ')) {
    const _word = stripExtraChars(word.toLowerCase());

    if (map.contains(_word)) {
      map.add(_word, 1, (key, value) => {
        const _key = _word;

        const update = map.get(_key) + value;

        if (update > greatestValue) {
          greatestKey = _key;
          greatestValue = update;
        }

        return update;
      });
    } else {
      map.add(_word, 1, (key, value) => value);
    }
  }

  return greatestKey;
}

module.exports = {
  repeatedWord,
  repeatedWordsGreatestOfAll,
};
