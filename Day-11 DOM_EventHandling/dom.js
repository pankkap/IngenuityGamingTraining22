// DOM References
// console.log(document.title);

// var x = document.getElementById("head1");
// console.log(x);

var y = document.getElementsByClassName("para");
console.log(y);

// var z = document.getElementsByTagName("ul");
// console.log(z);

// var para = document.querySelector(".para");
// console.log(para);

// var allPara = document.querySelectorAll(".para");
// console.log(allPara[1]);

// var h2 = document.getElementById("head2");

// DOM Manipulation
// x.style.backgroundColor = "yellow";
// x.innerText = "New Heading";

// h2.style.visibility = "hidden";
// allPara[1].style.fontFamily = "arial";
// allPara[1].style.color = "red";
// allPara[1].style.border = "2px solid blue";
// for (var i = 0; i < y.length; i++) y[i].style.color = "blue";

// Event Handling Mechanism
// 1. Inline Event Handling
// 2. Handle event using its reference
// 3. Using AddEventListener

function perfomrTask() {
  alert("Btn CLicked");
  console.log("Some Statement Executed");
  console.log("Some Statement Executed");
  console.log("Some Statement Executed");
  console.log("Some Statement Executed");
  console.log("Some Statement Executed");
}

var btn = document.querySelector("button");
console.log(btn);

// Way-2 using Reference

btn.onmouseover = function () {
  document.querySelector("p").style.backgroundColor = "pink";
};
btn.onmouseleave = () =>
  (document.querySelector("p").style.backgroundColor = "skyblue");

// Way-3 using AddEventListener
// add Listener
btn.addEventListener("click", task1);
// Remove Listener

btn.removeEventListener("click", task1);

function task1() {
  document.getElementById("head1").style.display = "none";
}
