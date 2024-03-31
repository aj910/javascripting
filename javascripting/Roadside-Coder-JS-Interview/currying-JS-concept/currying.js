// currying in JS - we have a function which takes one argument at a time and returns a new function expecting the next argument
// currying works in accordance of the number of params provided to a function and subsequently returning it as per the number of params provided

function sum(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
}

const show = sum(2)(4)(10);
console.log(show);

// partial application: transforms a function into another function with fixing some minor arguments, while leaving other arguments open for later use

function multiply(a) {
  return function (b, c) {
    return a * b * c;
  };
}

console.log(multiply(2)(3,10));

// real world currying example in DOM Manipulation

function updateHeadingText(id) {
    return function (content) {
        document.querySelector("#" + id).textContent = content;
    };
}

const updateHeader = updateHeadingText("headingInfo");
updateHeader("Lets start prepping!!");