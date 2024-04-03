const food = {
	types: 'only pizza'
}; 

console.log(food.types);

// iterating through object properties or keys and displaying their values

const user = {
	name: "Anmol",
	age: 28
};

for(key in user) {
	console.log(key); // displays key or property name in the object
}

for(key in user) {
	console.log(user[key]); // displays value of each property in an object
}