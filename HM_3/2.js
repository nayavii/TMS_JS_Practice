const wordsList = ['hello', 'wOrLD'];

const someFn = (words) => {

  if(!Array.isArray(words)) return;

  return words.map((word) => {
    const firstCapitalLetter = word[0].toUpperCase();

    const restChars = word.slice(1).toLowerCase();

    return firstCapitalLetter+restChars
  })
}

console.log(someFn(wordsList)); //[ 'Hello', 'World' ]