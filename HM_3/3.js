const users = [
  {
    id: 1,
    name: "Alex",
  },
  {
    id: 2,
    name: "Tomara",
  },
  {
    id: 3,
    name: "Max",
  },
];

const blackListIds = [2]

const removeUsersById = (users, usersId) => {

  if(!Array.isArray(users)) return;
  if(!Array.isArray(usersId)) return;


  return users.filter(({id})=>!usersId.includes(id))

}

console.log(removeUsersById(users, blackListIds));
