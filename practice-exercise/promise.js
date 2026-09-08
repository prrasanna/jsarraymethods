// const promise = new Promise((resolve, reject) => {
//     resolve("Task Completed");
//     reject("Task Failed");
// })
// promise
//     .then((result) => {
//         console.log(result);
// })
//     .catch((error) => {
//         console.log(error);
// });

// //------------------------------------------------------------------------------

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello Bala!");
//     },2000);
//         reject("Task Failed");
// })

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//--------------------------------------------------------------------------------

// const isLoggedIn = true;
// const promise = new Promise((resolve, reject) => {
//     if(isLoggedIn){
//         resolve("Login successful");
//     }
//     else{
//         reject("Login failed")
//     }
// })
// promise
//     .then((result) => {
//         console.log(result);
//     })
//      .catch((error) => {
//         console.log(error);
//     });

//--------------------------------------------------------------------------------

// const number = 0;

// const promise = new Promise((resolve, reject) => {
//      number === 10
//         ? resolve("Number is Valid")
//         : reject("Number is Invalid");
// });

// promise
//     .then((result) =>{
//         console.log(result);
//     })
//     .catch((error) =>{
//         console.log(error)
//     });

//--------------------------------------------------------------------------------

let balance = 1000;
let amount = 5000;
const promise = new Promise((resolve, reject) => {
    balance >= amount 
        ? resolve("Payment Successful") 
        : reject("Insufficient Balance");
});
promise
    .then((result) => {
        console.log(result);

    })
    .catch((error)=> {
        console.log(error);
    })