// Variable Shadowing with let case

function test() {
  let a = 20;

  if (true) {
    let a = 10;
    console.log(a); 
  }
  console.log(a);
}

test(); // Hey, then Hello will be printed as a in the if block shadows the variable a in test function. Will conceptually work the same with const

// variable shadowing with var case

function test() {
    var b = 300;
  
    if (true) {
      var b = 100;
      console.log(b); 
    }
    console.log(b);
  }

test();

// Illegal Shadowing (cannot shadow let and const variables with var)

// function show() {
//     let a = 25;
//     if (a) {
//         var a = 70; // cannot redeclare block scoped variable 'a'. 'a' has already being declared.
//     }
// }

function show() {
   var a = 25;
    if (a) {
        const a = 70; 
        console.log(a);
    }
    console.log(a);
}

show(); // 70, then 25. You can shadow var variable with let and const (legal shadowing)

