const users = [
  { name: "Alice", age: 17, isVIP: false },
  { name: "Bob", age: 22, isVIP: true },
  { name: "Charlie", age: 15, isVIP: false },
  { name: "Diana", age: 30, isVIP: true },
];

const filterWithVIPs = (users) => {
  return users.filter((user) => user.age >= 18);
    console.log(user.isVIP)
};

console.log(filterWithVIPs(users));