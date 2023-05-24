const users = [
  {
    id: 1,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "jpenddreth0@census.gov",
    gender: "Female",
    ip_address: "26.58.193.2",
  },
  {
    id: 2,
    first_name: "Petr",
    last_name: "Jackson",
    email: "gfrediani1@senate.gov",
    gender: "Male",
    ip_address: "229.179.4.212",
  },
  {
    id: 3,
    first_name: "Igor",
    last_name: "Trimailov",
    email: null,
    gender: "Male",
    ip_address: null,
  },
  {
    id: 4,
    first_name: "Igor",
    last_name: "Trimailov",
    email: null,
    gender: "They",
    ip_address: null,
  },
];

const splitByGender = (users) => {
  const WOMEN = "Female";

  return users.reduce(
    (genderCollection, { first_name, last_name, ...otherInfo }) => {
      const isWomen = otherInfo.gender === WOMEN;
      const gender = isWomen ? "women" : "men";

      const userToPush = {
        fullName: `${first_name} ${last_name}`,
        ...otherInfo,
      };

      genderCollection[gender].push(userToPush);

      return genderCollection
    },
    { men: [], women: [] }
  );
};

console.log(splitByGender(users));