// Написать функцию, которая принимает букву, если буква является большой, функция возвращает ‘Оууу май, большая буква!’. В ином случае ‘Нет уж, маленькие буквы - скучно’

// Пример: 
// checkLetterCase(‘A’) // ‘Оууу май, большая буква!’
// checkLetterCase(‘s) //  ‘Нет уж, маленькие буквы - скучно’


const checkLetterCase = (letter) => {

  const uppercaseLetter = letter.toUpperCase();

  if (letter === uppercaseLetter){
    return 'Оууу май, большая буква!';
  } else {
    return 'Нет уж, маленькие буквы - скучно'
  }
}

console.log(checkLetterCase('f'));