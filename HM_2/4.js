// Функция принимает, массив строчных и числовых значений. Функция должна вернуть новый массив состоящий только из строк, количество символов которых чётное.

const data = ["Hi", 2, 3, 4, 5, "JS", 2, "C++"];

//for
const returnStringEven1 = (data) => {
  if (!Array.isArray(data)) return;

  const result = [];

  for (i = 0; i < data.length; i++) {
    const item = data[i];

    const isString = typeof item === "string";
    const isEvenAmountLetters = item.length % 2 === 0;

    const isitemValid = isString && isEvenAmountLetters;

    if (isitemValid) {
      result.push(item);
    }
  }

  return result;
};

console.log(returnStringEven1(data));

// while

const returnStringEven2 = (data) => {
  if (!Array.isArray(data)) return;

  const result = [];

  let i = 0;

  while (i < data.length) {
    const item = data[i];

    const isString = typeof item === "string";
    const isEvenAmountLetters = item.length % 2 === 0;

    const isItemValid = isString && isEvenAmountLetters;

    if (isItemValid) {
      result.push(item);
    }
    i++;
  }

  return result;
};

console.log(returnStringEven2(data));

//for of

const returnStringEven3 = (data) => {
  if (!Array.isArray(data)) return;

  const result = [];

  for (const item of data) {
    const isString = typeof item === 'string';
    const isEvenAmountLetters = item.length % 2 === 0;

    const isItemValid = isString && isEvenAmountLetters;

    if(isItemValid){
      result.push(item);
    }
  }

  return result;
}

console.log(returnStringEven3(data));

//modernWay
const returnStringEven4 = (data) => {
  if (!Array.isArray(data)) return;

  return data.filter((item) => {
    const isString = typeof item === "string";
    const isEvenAmountLetters = item.length % 2 === 0;

    const isItemValid = isString && isEvenAmountLetters;

    return isItemValid;
  });
};

console.log(returnStringEven4(data));
