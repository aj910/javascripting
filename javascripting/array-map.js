const users = [
    {
        firstName: "Anmol",
        lastName: "Jain",
        age: 29,
    },
    {
        firstName: "Sameer",
        lastName: "Sharma",
        age: 31,
    },
    {
        firstName: "Arihant",
        lastName: "Jain",
        age: 26,
    },
    {
        firstName: "Sakshi",
        lastName: "Jain",
        age: 35,
    },
];

const data = users.map((user) => user.age);
console.log(data);