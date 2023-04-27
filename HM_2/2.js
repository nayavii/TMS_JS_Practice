// Функция принимает массив букв разных регистров. Результатом функции должен быть новый массив где буквы которые были в нижнем регистре станут в верхнем, а в верхнем станут в нижнем

const lettersList = ["a", "B", "c"];

//for

const changeCaseOfLetters1 = (letters) => {
  if (!Array.isArray(letters)) return;

  const result = [];

  for (i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (letter === letter.toLowerCase()) {
      result.push(letter.toUpperCase());
    } else {
      result.push(letter.toLowerCase());
    }
  }

  return result;
};

console.log(changeCaseOfLetters1(lettersList));

//while

const changeCaseOfLetters2 = (letterList) => {
  if (!Array.isArray) return;

  const result = [];

  let i = 0;

  while (i < letterList.length) {
    const letter = letterList[i];

    if (letter === letter.toLowerCase()) {
      result.push(letter.toUpperCase());
    } else {
      result.push(letter.toLowerCase());
    }

    i++;
  }

  return result;
};

console.log(changeCaseOfLetters2(lettersList));

// for of

const changeCaseOfLetters3 = (letterList) => {
  if (!Array.isArray(letterList)) return;

  const result = [];

  for (const letter of letterList) {
    if (letter === letter.toLowerCase()) {
      result.push(letter.toUpperCase());
    } else {
      result.push(letter.toLowerCase());
    }
  }

  return result;
};

console.log(changeCaseOfLetters3(lettersList));

//modernWay
const changeCaseOfLetters4 = (letters) => {
  if (!Array.isArray(letters)) return;

  return letters.map((char) => {
    if (char === char.toLowerCase()) {
      return char.toUpperCase();
    }

    return char.toLowerCase();
  });
};

console.log(changeCaseOfLetters4(lettersList));
