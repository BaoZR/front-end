// 
const a: string = "hello";
console.log(a);
//布尔类型(boolean)
const flag: boolean = true;
//Number 类型
const num: number = 1;
//String 类型
const str: string = "hello"
//Enum 类型
enum Color{
    RED="红色",PINK="粉色",BLUE="蓝色",
}
const pink:Color = Color.PINK
console.log(pink)

const enum ConstColor{
    RED,PINK,BLUE,
}

const color:ConstColor[] = [ConstColor.RED,ConstColor.PINK,ConstColor.BLUE]

//数组类型(array)
const flag1: number[] = [1, 2, 3];
const flag2: Array<number> = [1, 2, 3];

//元组类型(tuple)
const flag3: [string, number] = ["hello", 1];

//Symbol
const sym1 = Symbol("hello");
const sym2 = Symbol("hello");
console.log(Symbol("hello") === Symbol("hello"));
//any
const flag4: HTMLElement | null = document.getElementById("app");
//null 和 undefined
let u:undefined = undefined;
let n:null = null;
//Unknown
let value:unknown;
value = true;
value = 42;

let value1:unknown = value;
//let value3: boolean = value; //error

//void
function hello(name: string): void{}

//never
function neverReach(): never{
    throw new Error("an Error")
}

//BigInt
const max1 = Number.MAX_SAFE_INTEGER; // 2**53-1
console.log(max1 + 1 === max1 + 2); //true

const max2 = BigInt(Number.MAX_SAFE_INTEGER);
console.log(max2 + 1n === max2 + 2n); //false

