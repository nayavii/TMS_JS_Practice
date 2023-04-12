// Написать функцию, которая принимает 2 значения. 1 – строка, 2 – число. Если длинна строки, больше чем число функция должна вернуть – ‘String is too long!’ в ином случае вернуть переданную строку. 
// checkStringLength(‘HI’, 2) // Hi
// checkStringLength(‘HI’, 1) // – ‘String is too long!’.


const checkStringLength = (string, number) => {

  const lenthOfTheString = string.length

  if (lenthOfTheString > number) {
    return 'String is too long!';
  } else {
    return string;
  }
}

console.log(checkStringLength ('Hi', 1));