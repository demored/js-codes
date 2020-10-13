let a=1;
let b = 2;

let sourceObj = {a,b}
console.log(sourceObj)


let c = Object.assign(sourceObj,{b:3})
console.log(sourceObj)
