// Напишите функцию min (a,b), которая возвращает меньшее из чисел a, b.

const min = (a,b) => {
  
  if (a === b) {
    return 'Numbers are iqual';
  }

  return Math.min(a,b);

};

console.log(min(14, 14));