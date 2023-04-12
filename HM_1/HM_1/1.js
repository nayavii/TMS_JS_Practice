// Лизе нужно написать функцию sayHello(name), которая возвращает приветствие для пользователя. Тем не менее, она влюблена в пользователя с именем "Mark", и хотела бы попривествовать его немного иначе.

const sayHello = (name) => {

  const SPECIAL_NAME = 'mark'

  const firstCaptitalLetter = name[0].toUpperCase();
  const restChars = name.slice(1).toLowerCase();
  const fullName = firstCaptitalLetter + restChars;

  const isMark = name.toLowerCase() === SPECIAL_NAME;

  return isMark ? `Hi, ${fullName}!`: `Hello, ${fullName}!`;

}

console.log(sayHello('mark'));