const car = {
	make: 'Honda', 
	model: 'Accord', 
	year: 2020
}; 

const keys = Object.keys(car); 

console.log(keys);

// 2 keys with the same name

const obj = {
	a: 1,
	a: 1,
	b: 2,
	b: 4,
	a: 31,
};

console.log(obj); // the last value of the variable given will be replaced by their first values assigned to them