// Ваша цель создать функцию deleteChars(str), которая удаляет первый и последий символ строки,которая передаетсяв параметр, и возвращает новую строку без этих символов

const deleteChars = (string) => {

  const newWord = string.slice (1, -1)

  return newWord
}

console.log(deleteChars('Nanny'));