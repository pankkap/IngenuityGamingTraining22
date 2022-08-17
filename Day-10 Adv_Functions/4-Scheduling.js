// setTimeout function

// setTimeout(callback, 3000);

function callback() {
  console.log("Hello Friends");
}

setTimeout(() => {
  console.log("hello hello ");
}, 5000);

// setTimeinterval

var myInterval = setInterval(callback, 2000);
clearInterval(myInterval);
