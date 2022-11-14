var heading = document.querySelector('h1');
heading.innerText = "DOM Manipulation using Typescript";
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
// console.log(input1.value, input2.value);
var form = document.querySelector('.myForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var num1 = Number(input1.value);
    var num2 = Number(input2.value);
    var result = num1 + num2;
    console.log(result);
    var newP = document.createElement('p');
    newP.innerText = result;
    form.appendChild(newP);
});
