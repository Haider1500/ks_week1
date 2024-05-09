const main = async () => {
  while (true) {
    const promise1 = new Promise((res) => {
      setTimeout(() => {
        res(new Date());
      }, 1000);
    });

    await promise1.then((value) => {
      console.log(value);
    });
  }
};

main();
