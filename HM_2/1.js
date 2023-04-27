// Функция принимает 2 аргумента 1 – массив имён, 2 – массив букв;
// Если имя пользователя из первого массива начинается с буквы, которая есть во втором аргументе – этот пользователь не должен попасть в массив результата.

const userList = ["Alex", "alex", "Max", "Vika", "Petr", "Alexandra"];

const letterBlackList = ["a", "p"];

//for

const filterUsersByLetter = (users, blackListedLetter) => {
  if (!Array.isArray(users) || !Array.isArray(blackListedLetter)) return;

  const result = [];
  const lowerCasedBlackListedLetter = [];

  for (let i = 0; i < blackListedLetter.length; i++) {
    const letter = blackListedLetter[i].toLowerCase();

    lowerCasedBlackListedLetter.push(letter);
  }

  for (let i = 0; i < users.length; i++) {
    const userName = users[i];
    const firstLetterOfUserName = userName[0].toLowerCase();

    const isBlackListed = lowerCasedBlackListedLetter.includes(
      firstLetterOfUserName
    );

    if (!isBlackListed) {
      result.push(userName);
    }
  }

  return result;
};

console.log(filterUsersByLetter(userList, letterBlackList));

//while

const filterUsersByLetter1 = (users, blackListedLetter) => {
  if (!Array.isArray(users) || !Array.isArray(blackListedLetter)) return;

  const result = [];
  const lowerCasedBlackListedLetter = [];

  let i = 0;

  while (i < blackListedLetter.length) {
    const letter = blackListedLetter[i].toLowerCase();

    lowerCasedBlackListedLetter.push(letter);

    i++;
  }

  let j = 0;

  while (j < users.length){
    const userName = users[j];

    const firstLetterOfUserName = userName[0].toLowerCase();

    const isBlackListed = lowerCasedBlackListedLetter.includes(firstLetterOfUserName);

    if(!isBlackListed) {
      result.push(userName);
    }

    j++;
  }

  return result;

};

console.log(filterUsersByLetter1(userList, letterBlackList));


//for of

const filterUsersByLetter2 = (users, blackListedLetter) => {

  if (!Array.isArray(users) || !Array.isArray(blackListedLetter)) return;

  const result = [];
  const lowerCasedBlackListedLetter = [];

  for (const letter of blackListedLetter) {
    lowerCasedBlackListedLetter.push(letter.toLowerCase())
  }

  for (const userName of users) {
    const firstLetterOfUserName = userName[0].toLowerCase();

    const isBlackListed = lowerCasedBlackListedLetter.includes(firstLetterOfUserName);

    if(!isBlackListed) {
      result.push(userName)
    }
  }

  return result;

}

console.log(filterUsersByLetter2(userList, letterBlackList));


//modernWay

const filterUsersByLetter3 = (users, blackListedLetter) => {
  if(!Array.isArray(users) || !Array.isArray(blackListedLetter)) return;

  const lowerCasedBlackListedLetter = blackListedLetter.map((letter)=> letter.toLowerCase());

  const result = users.filter((userName) => {

    const firstLetterOfUserName = userName[0].toLowerCase();

    if (!lowerCasedBlackListedLetter.includes(firstLetterOfUserName)) {
      return userName;
    }
  })

  return result;
}

console.log(filterUsersByLetter3(userList, letterBlackList));