// handling promises using async await


const prom = new Promise((resolve, reject) => {
    resolve("Promise displayed");
});

async function handlePromise() {
  const value = await prom;
  console.log(value);
}

handlePromise();