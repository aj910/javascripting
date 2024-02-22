async function getData() {
    return "Anmol";
}

const output = getData();
console.log(output); // returns a Promise { 'Anmol' }

// Creating a promise and handling it with then()

const promise = new Promise((resolve, reject) => {
    resolve("hello anmol")
});

async function getInfo() {
    return promise;
}

const promiseData = getInfo();
promiseData.then((res) => console.log(res)); // logs hello anmol