function getTodo() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        if (response.ok) {
          reject("Failed to fetch data");
        }

        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error.message);
      });
  });
}

getTodo()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("---------------------------------------");

const newCall = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

newCall();
