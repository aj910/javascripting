// case 1: function and variable is accessed after initialisation: 

console.log(displayName)
var x = 10;

var displayName = () => {
    console.log("Anmol");
}
console.log(x);
displayName();

// calls the function with Anmol printed in the console

// case 2: function and variable is accessed before initialisation: 

displayName(); // Anmol
console.log(x); // undefined

var x = 10;

function displayName() {
    console.log("Anmol");
}

// case 3: not defined case for a variable

displayName();
console.log(x);
// will throw an error - x is not defined when we try to access it without initialisation 

function displayName() {
    console.log("Anmol");
}
