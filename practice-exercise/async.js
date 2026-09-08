const getMessage = async () => {
  try {
    const promise = new Promise((resolve, reject) => {
      resolve("Hello JavaScript");
    });
    const response = await promise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
getMessage();

//-----------------------------------------------


