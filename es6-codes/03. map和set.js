let key = {};

console.log(key === {});
console.log(key == {});

var t = {};

let key1 = new Map();
key1.set("haha", "hehe");
key1.set(t, "this is a object")
console.log(key1.get("haha"))
console.log(key1.get(t))



var myMap = new Map();
myMap.set(0, "hello")
myMap.set(1, "world")
myMap.forEach(function(value, key){
    console.log(key + "=" + value)
})



//set 对象操作
let set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);
set1.add(2);
console.log(set1);


//set对象转数组
let mySet = new Set(["value1", "value2", "value3"]);
console.log(mySet);
console.log([...mySet]);
console.log(mySet);




















