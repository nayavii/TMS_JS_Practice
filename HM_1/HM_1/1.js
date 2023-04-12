// Лизе нужно написать функцию sayHello(name), которая возвращает приветствие для пользователя. Тем не менее, она влюблена в пользователя с именем "Mark", и хотела бы попривествовать его немного иначе.

const sayHello = (name) => {
  const firstCaptitalLetter = name[0].toUpperCase();
  const restChars = name.slice(1).toLowerCase();

  const fullName = firstCaptitalLetter + restChars 
  if (fullName === 'Mark'){
    return 'Hi, Mark!'
  } else {
    return `Hello, ${fullName}!`
  }
}

console.log(sayHello('OleG'));