let myNum = 10;
let myStr = "строка";
let myBool = true;
let myArr = [1, 2, 3, 4, 5];
const myObj = {
  first: "First Name",
  last: "Last Name",
};
let decimal2;
console.log(myNum.toExponential(2));

var decimal2;
decimal2 = myNum.toFixed(2);
console.log(decimal2);

var i;
console.log(++i);
console.log(i++);

console.log(--i);
console.log(i--);

let myTest = 20;
console.log((myTest += 10));
console.log((myTest -= 10));
console.log((myTest *= 10));
console.log((myTest /= 10));
console.log((myTest %= 10));

const myPi = Math.PI;

const myPi = Math.PI;

let number = 89.279;
let myRound = Math.round(number);
console.log(myRound);

var myRandom = Math.random() * 10;
console.log(myRandom);

let base = 3;
let exponent = 5;
let myPow = Math.pow(base, exponent);
console.log(myPow);

let strObj = { str: "Мама мыла раму, рама мыла маму" };
strObj.length = strObj.str.length;
let isRamaPos = strObj.str.indexOf("рама");
strReplace = strObj.str.replace(
  "Мама мыла раму, рама мыла маму",
  "Мама моет раму, Рама держит маму"
);

let upperCase = "мама мыла раму, рама мыла маму".toUpperCase();
let lowerCase = "Мама Мыла Раму, Рама Мыла Маму".toLowerCase();
