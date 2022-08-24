// ES6 Promise
// 1. Its a Way of Communicating with APIs.
// 2. Its an Object that returns a Value that hope to recieve in Future but not right now
// 3. Pormise is well suited for handling Asynchronous Operations
// 4. Promise has three states. Pending, Fullfilled, Rejected

function sayHi() {
  return new Promise((resolve, reject) => {
    console.log("Let me Check my Calender..........");
    setTimeout(() => {
      const err = false;

      if (!err) {       // API Call
        resolve("Ok Preeteek , i will meet u");
      } else {
        reject("Sorry, I am busy");
      }
    }, 3000);
  });
}

// console.log(sayHi());
// Consume the Promiese

sayHi()
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
