// Types Of Operator
// Arithmetic operators
// Assignment operators
// Comparison operators
// Logical operators
// conversion with console.log and innerHTML

// "use strict"

//let ,var,const

let username = "batman";
// variable name is declared with value with intialization

console.log(username);

// Arithmetic operators
// + adding
// - subtracting
// * multiplication
// / division
// % modulus(remainder)
// ** exponent(power)
// ++ (increment)(prefix,postfix)

let a = 5;
let b = 3;

let sum = a + b;
console.log(sum);
console.log(a + b);

console.log(a - b);

console.log(a * b);

console.log(a / b); //Math.floor(a/b) division return quotient
console.log(Math.floor(a / b));
console.log(Math.ceil(a / b));

console.log(Math.round(9 / 4));
console.log(9 / 4);

console.log(a % b); // 5/3 remainder 2 modulus return remainder
console.log(b ** 2);
console.log(3 ** 3);

console.log(++a); // prefix increment// first increment then assigned

let temp = a++; // 6
console.log(a++); // postfix increment// first assigned then increment

console.log(a);

console.log(temp);

// Assignment operators
// =
// short hand
// +=
// -=
// *=
// /=
// %=
// **=

let c = 2;
let d = 3;

let add = 5;

// add = add + d
add += d;

console.log(add);

// DATA TYPES

// primitive types
// number
let num = 56;
console.log(typeof num);
// string
let str = "24";
console.log(typeof str);
// undefined
console.log(typeof undefined);
// boolean => false and true
let boolean = false;

console.log(typeof boolean);
// null  data type is object

console.log(typeof null);
// bigInt  for bigInt n
let bigNumber = 398704859384593845934852089n;

console.log(typeof bigNumber);

// non-primitive types
// array [1,2,3,false,true,"hello"]
// object // store key value pairs
let object = {
  userName: "batman",
  age: 25,
  city: "delhi",
};
// function is block of code

// {
// block creator

// }

// camelCase  addressOfCompany
// snakeCase   address_of_company

console.log(2);
console.log(3);
console.log(4);

// normal function
function print() {
  console.log(1);
}
function print1() {
  console.log(4);
}

function print2() {
  console.log(5);
}

print();
print2();
print1();

// Comparison operators
// ==  only value comparison
// === strickly comparison
// >= greater than equalto
// <= less than equalto
// > greater than
// <less than
// != not equalto
// !== not strickly equalto

console.log("5" == 5);
console.log("10" === 10);

console.log(4 != 5);

// Logical operators
// && and return false value  and false comaparision
// || and return true value and true comaparision

console.log(0 == 0 && 5 > 2 && 12 > 3 && 12);
console.log(0 || false || false || 0);

console.log((12 > 3 && 34 == 55 && 34 - 34) || 0 || (true && 55 > 1 && 100));

//false && 0  || 0 || true && 55>1 && 100
//false && 0  || 0 || 100

//false ||0||100

// conversion with console.log and innerHTML

let stringNum = "1234a5";

console.log(typeof stringNum);
let resultNum = Number(stringNum);
console.log(typeof resultNum);

console.log(typeof typeof resultNum);

// explicit conversion
let numberStr = 12345;
console.log(numberStr);
let resultStr = String(numberStr);

console.log(resultStr);

let boolTemp = true;
let resultTemp = Number(boolTemp);

console.log(resultTemp);

let emptyString = "1";
let convertBoolean = Boolean(emptyString);

console.log(convertBoolean);

console.log(null === undefined);

console.log("5" - 2); // implicit conversion
console.log(true - 9);
console.log("false" + 1); // concatination
console.log("abc" + 1 + 2 + 3);

console.log("hello" + " world");

console.log(1 + 2 + 3 + "abc");

let object1 = { userName: "batman" };
let object2 = { userName: "batman" };
console.log(object1 == object2);
console.log("12"-false)


let aa = {valueOf:function (){
  return 2;
}}

console.log(aa==2)
console.log(aa+3)
console.log(aa>1)