const checkPalindrom = (string) => {
  const lowerCasedString = string.toLowerCase();

  return lowerCasedString === lowerCasedString.split("").reverse().join("");
};

console.log(checkPalindrom("шалаш"));
