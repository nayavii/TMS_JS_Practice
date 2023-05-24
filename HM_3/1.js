const numberList = [1, 2, 3];

const someFn = (numbers) => {
  if (!Array.isArray(numbers)) return;

  return numbers.map((number) => number % 2 === 0 ? number + 1 : number - 1)
};


console.log(someFn(numberList));