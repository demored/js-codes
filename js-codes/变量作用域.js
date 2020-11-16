an(); // 输出结果 bn
function an(){
    var b = 'bn';
    function bn(){
        console.log(b);   // bn会往上一级寻找已经声明的同名变量,并赋值,直到全局作用域时还没找到,则会成为window的属性
         b = 'bn2';
    }
    bn();
    console.log(b); // 输出 bn2
}

console.log(a);
var a = 1;

function f(){
    console.log(c);
    var c = 1;
}
f()