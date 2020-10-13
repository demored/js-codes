
//默认函数
function foo(x,y=10){
    console.log("x=" + x + ",y=" + y);
}

foo(1, 2);
foo(1);
foo(1,undefined);
foo(1, null);

//不定函数

function foo1(...a){
    console.log(a);
}

foo1(1,2,3,4);

//箭头参数
var f1 =


