"use strict";
// 
const a = "hello";
console.log(a);
//布尔类型(boolean)
const flag = true;
//Number 类型
const num = 1;
//String 类型
const str = "hello";
//Enum 类型
var Color;
(function (Color) {
    Color["RED"] = "\u7EA2\u8272";
    Color["PINK"] = "\u7C89\u8272";
    Color["BLUE"] = "\u84DD\u8272";
})(Color || (Color = {}));
const pink = Color.PINK;
console.log(pink);
const color = [0 /* RED */, 1 /* PINK */, 2 /* BLUE */];
//数组类型(array)
const flag1 = [1, 2, 3];
const flag2 = [1, 2, 3];
//元组类型(tuple)
const flag3 = ["hello", 1];
//Symbol
const sym1 = Symbol("hello");
const sym2 = Symbol("hello");
console.log(Symbol("hello") === Symbol("hello"));
//any
const flag4 = document.getElementById("app");
//null 和 undefined
let u = undefined;
let n = null;
//Unknown
let value;
value = true;
value = 42;
let value1 = value;
//let value3: boolean = value; //error
//void
function hello(name) { }
//never
function neverReach() {
    throw new Error("an Error");
}
//BigInt
const max1 = Number.MAX_SAFE_INTEGER; // 2**53-1
console.log(max1 + 1 === max1 + 2); //true
const max2 = BigInt(Number.MAX_SAFE_INTEGER);
console.log(max2 + 1n === max2 + 2n); //false
