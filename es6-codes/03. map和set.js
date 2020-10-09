let key = {};

console.log(key === {});
console.log(key == {});

var t = {};

let key1 = new Map();
key1.set("haha", "hehe");
key1.set(t, "this is a object")
console.log(key1.get("haha"))
console.log(key1.get(t))




