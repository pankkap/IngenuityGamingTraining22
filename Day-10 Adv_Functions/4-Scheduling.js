// Scheduling FUnctions
// setTimeout allows us to run a function once after the interval of time.
// setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

// setTimeout function
setTimeout(() => {
  console.log("hello hello ");
}, 5000);

//setTimeOut with function
setTimeout(callback, 3000);

function callback() {
  console.log("Hello Friends");
}

// setTimeinterval
setInterval(() => {
  console.log("Hello Friends");
}, 2000);

// Stop Interval using clearInterval
var myInterval = setInterval(callback, 2000);
clearInterval(myInterval);
