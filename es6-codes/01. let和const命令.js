// var i 与for循环

for(var i = 0 ; i < 10 ; i++){
    setTimeout(function(){
        console.log(i);
    })
}
//循环出10个 10，i是全局变量

for(let i = 0 ; i < 10 ; i++){
    setTimeout(function(){
        console.log(i);
    })
}

//解构赋值
console.log("=======================");
let {a, b} = {a:"hello", b:"world"};
console.log(a);
console.log(b);
let { baz : foo } = { baz : 'ddd' };
console.log(foo);

let obj = {p:['hello', {y:'world'}]};
console.log(obj.p[0]);
console.log(obj.p[1].y);



