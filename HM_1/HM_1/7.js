// Написать функцию, которая принимает букву, если буква является большой, функция возвращает ‘Оууу май, большая буква!’. В ином случае ‘Нет уж, маленькие буквы - скучно’

// Пример: 
// checkLetterCase(‘A’) // ‘Оууу май, большая буква!’
// checkLetterCase(‘s) //  ‘Нет уж, маленькие буквы - скучно’


const checkLetterCase = (letter) => {

  const optimizedChar = typeof letter === 'string' ? letter.trim() : null;

  if (!optimizedChar || optimizedChar.length > 1) {
    return;
  }

  const uppercaseLetter = letter.toUpperCase();

  return letter === uppercaseLetter ? 'Оууу май, большая буква!' : 'Нет уж, маленькие буквы - скучно';

}

console.log(checkLetterCase(9));