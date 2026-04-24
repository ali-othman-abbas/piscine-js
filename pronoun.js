/**
 *
 * @param {string} str
 */

function pronoun(str) {
  const wordRe = /\b\w+\b/g;
  const wordArr = str.match(wordRe);
  console.log(wordArr)
  const pronouns = ["i", "you", "she", "it", "they", "we"];

  const result = {};
  for (let i = 0; i < wordArr.length - 1; i++) {
    if (
      pronouns.includes(wordArr[i].toLowerCase()) &&
      !pronouns.includes(wordArr[i + 1])
    ) {
      const pro = wordArr[i].toLowerCase();
      if (!(pro in result)) {
        result[pro] = { word: [], count: 0 };
      }
      result[pro].word.push(wordArr[i + 1]);
      result[pro].count++;
    }
  }

  return result;
}

