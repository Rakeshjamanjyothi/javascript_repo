/**Numbers */
const score = 400;
console.log(score);

const newNumber = new Number(100);
console.log(newNumber); //[Number: 100]

console.log(newNumber.toString().length); //3

console.log(newNumber.toFixed(2)); //no of digits after decimal point

const num = 125.89;
console.log(num.toPrecision(3)); //126

const sampNum = 100000;
console.log(sampNum.toLocaleString()); //shows in amarican standards format

console.log(sampNum.toLocaleString("en-IN")); //
// shows in indian standers gives value with commas

/*
    Math
*/

console.log(Math); //object

console.log(Math.abs(-4)); //make the negitive value to positive
console.log(Math.round(4.3)); //4
console.log(Math.round(4.7)); //5

console.log(Math.floor(4.9)); //4
console.log(Math.ceil(4.4)); //5

console.log(Math.min(4, 5, 2, 9)); //2
console.log(Math.max(4, 5, 2, 9)); //9

console.log(Math.random()); //random value gives value between 0 and 1

//to get range of values with random

console.log(Math.random() * 10); //random value gives value between 0 and 1

console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;
console.log(Math.random() * (max - min + 1)); //0.12 * 11 => 1.12 to get range and minimum number to that value

console.log(Math.floor(Math.random() * (max - min + 1) + min)); //
