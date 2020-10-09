
const COLOR_RED = "red";
const COLOR_YELLOW = "yellow";
const COLOR_BLUE = "blue";  //名称其实是重复的
const MY_BLUE = "blue";

function ColorException(message) {
    this.message = message;
    this.name = "ColorException";
}

function getConstantName(color) {
    switch (color) {
        case COLOR_RED :
            return "COLOR_RED";
        case COLOR_YELLOW :
            return "COLOR_YELLOW ";
        case COLOR_BLUE:
            return "COLOR_BLUE";
        case MY_BLUE:
            return "MY_BLUE";
        default:
            throw new ColorException("Can't find this color");
    }
}

try {

    var colorName = getConstantName(MY_BLUE);
    console.log(colorName);

} catch (e) {
    var colorName = "unk" +
        "nown";
    console.log(e.message, e.name); // 传递异常对象到错误处理
}


let yellow1 = Symbol.for("Yellow");
console.log(yellow1);

let yellow2 = Symbol.for("Yellow");

console.log(Symbol.keyFor(yellow2));

