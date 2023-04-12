// Написать функцию которая принимает в себя строчное значение состоящее из одного слова. В слове могут быть буквы разных регистров. Результатом выполнения данной функции должна быть строка, в которой первая буквы заглавная, а все последующие в нижнем регистре.
// Если в слове четное количество букв, то и последняя буква должна быть заглавной.
// Пример:

// someFn(‘пиТеР’) // Питер
// someFn(‘javaScript’) // JavascripT

const capitalyzedWord = (string) => {

  const isCharsAmountEven = string.length % 2 === 0;

  const firstCaptitalLetter = string[0].toUpperCase();
  const restChars = string.slice(1).toLowerCase();

  if (isCharsAmountEven) {
    const restCharsOfEven = string.slice(1, -1).toLowerCase();
    const lastCaptitalLetter = string.slice(-1).toUpperCase();

    return `${firstCaptitalLetter}${restCharsOfEven}${lastCaptitalLetter}`;
  } 
  
  return `${firstCaptitalLetter}${restChars}`;
  
}

console.log(capitalyzedWord('javaScriP'));