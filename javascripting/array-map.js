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

// chaining map & filter together: filter out firstnames where age is greater than 30. Concept known as chaining of functions

const filteredData = users.filter((user) => user.age >= 30).map((user) => user.firstName)
console.log(filteredData);

// using reduce function to filter out firstnames where age is greater than 30

const reduceData = users.reduce((acc, curr) => {
   if(curr.age > 30) {
    acc.push(curr.firstName);
   }
   return acc
}, []);

console.log(reduceData);


const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 12.99
    },
    {
        title: "To Kill A Mockingbird",
        author: "Harper Lee",
        price: 9.99
    },
];

const showBook = books.map((book) => {
   return `${book.title}: ${book.price}`;
});

console.log(showBook);