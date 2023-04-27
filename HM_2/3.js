// Функция принимает массив чисел. Возвращает массив строк такого вида:

// ['Value: 3; Index: 0; Squared: 9','Value: 4; Index: 1; Squared: 16','Value: 6; Index: 2; Squared: 36']

const numberList = [3, 4, 6];

//for

const getDetailedInfo1 = (numbers) => {
  if (!Array.isArray(numbers)) return;

  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    result.push(`Value: ${number}; Index: ${i}; Squared: ${number ** 2}`);
  }

  return result;
};

console.log(getDetailedInfo1(numberList));

//while

const getDetailedInfo2 = (numbers) => {
  if (!Array.isArray(numbers)) return;

  const result = [];

  let i = 0;

  while (i < numbers.length) {
    const number = numbers[i];

    result.push(`Value: ${number}; Index: ${i}; Squared: ${number ** 2}`);

    i++;
  }

  return result;
};

console.log(getDetailedInfo2(numberList));

//for of

const getDetailedInfo3 = (numbers) => {
  if (!Array.isArray(numbers)) return;

  const result = [];

  for (const number of numbers) {
    const index = numbers.indexOf(number);

    result.push(`Value: ${number}; Index: ${index}; Squared: ${number ** 2}`);
  }

  return result;
};

console.log(getDetailedInfo3(numberList));
//modernWay

const getDetailedInfo4 = (numbers) => {
  if (!Array.isArray(numbers)) return;

  return numberList.map(
    (number, index) =>
      `Value: ${number}; Index: ${index}; Squared: ${number ** 2}`
  );
};

console.log(getDetailedInfo4(numberList));
