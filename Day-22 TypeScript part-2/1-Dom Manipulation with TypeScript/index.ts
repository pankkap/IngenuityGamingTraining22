var heading = document.querySelector('h1') as HTMLHeadElement;
heading.innerText = "DOM Manipulation using Typescript"


var input1 = document.getElementById('num1') as HTMLInputElement;
var input2 =  document.getElementById('num2') as HTMLInputElement;
// console.log(input1.value, input2.value);

var form = document.querySelector('.myForm') as HTMLFormElement;

form.addEventListener('submit', function(e:Event){
    e.preventDefault();
    
    
    let num1 = Number(input1.value)
    let num2 = Number(input2.value)
    
    let result:number = num1 + num2;
    console.log(result);
    

    let newP = document.createElement('p')
    newP.innerText = <string><unknown>result;
    form.appendChild(newP);

});