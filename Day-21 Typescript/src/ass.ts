let input:any = prompt("Enter your name");
let newEle:any = document.createElement('h1');
newEle.innerText = input;
document.body.appendChild(newEle);