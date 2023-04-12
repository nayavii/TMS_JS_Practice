// Написать функцию, которая склеивает 2 строки друг с другом. 
// Имейте ввиду, между ними должен быть пробел.

// concatenate(‘Hello’, ‘World’) // ‘Hello World’.


const concatenate = (string1, string2) => string1.concat(' ', string2)

console.log(concatenate('Hello', 'World'));