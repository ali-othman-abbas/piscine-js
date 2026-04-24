/**
 *
 * @param {string} str
 */

function pronoun(str) {
  const wordRe = /\b\w+\b/g;
  const wordArr = str.match(wordRe);
  const pronouns = ["i", "you", "she", "it", "they", "we"];

  const result = {};
  for (let i = 0; i < wordArr.length; i++) {
    if (pronouns.includes(wordArr[i].toLowerCase())) {
      const pro = wordArr[i].toLowerCase();
      if (!(pro in result)) {
        result[pro] = { word: [], count: 0 };
      }
      result[pro].count++;
      if (
        i + 1 < wordArr.length &&
        !pronouns.includes(wordArr[i + 1].toLowerCase())
      ) {
        result[pro].word.push(wordArr[i + 1]);
      }
    }
  }

  return result;
}

