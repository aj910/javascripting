// var concept
// within its block scope as below, a value is accessible. var by default has global scope
{ 
    var a = 5;
}
console.log(a); // 5


//let scope
{
    let b = 30;
}
//console.log(b); // throws an reference error as b not defined as b value is accessed outside of its declaration scope

{
    let b = 30;
    console.log(b);
}

// const scope 

{
    const x = 10;
}
// console.log(x); // works similar to let, throws a reference error as x not defined because const variable cannot be accessed outside of its declaration scope

{
    const x = 10;
    console.log(x)
}