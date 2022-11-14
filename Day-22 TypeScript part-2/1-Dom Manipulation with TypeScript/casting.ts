// let a:unknown  = true;
// let data:number = a;




let str:string = "22"
let numVar:number = str as unknown as number
let numVar1:number = <number><unknown>str 
console.log(numVar);