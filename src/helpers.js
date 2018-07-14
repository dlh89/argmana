export const replaceAccents = (word) => {
  const accents = {
    à: 'a',
    á: 'a',
    â: 'a',
    ã: 'a',
    ä: 'a',
    å: 'a',
    æ: 'ae',
    ć: 'c',
    ç: 'c',
    č: 'c',
    è: 'e',
    é: 'e',
    ê: 'e',
    ë: 'e',
    ě: 'e',
    ì: 'i',
    í: 'i',
    î: 'i',
    ï: 'i',
    ñ: 'n',
    ò: 'o',
    ó: 'o',
    ô: 'o',
    õ: 'o',
    ö: 'o',
    ø: 'o',
    š: 's',
    ß: 'ss',
    ù: 'u',
    ú: 'u',
    û: 'u',
    ü: 'u',
    ý: 'y',
    ÿ: 'y',
    ž: 'z'
  }

  let newWord = word.slice();
  // check if each of the accented characters appears in the word
  Object.keys(accents).forEach((letter) => {
    if (word.includes(letter)) {
      // replace each instance with the non-accented equivalent
      for (var i = 0; i < word.split(letter).length; i++) {
        newWord = newWord.replace(word[word.indexOf(letter)], accents[letter]);
      }
    }
  })
  return newWord;
}