let score =0  ;

//console.log(score);
//console.log(typeof score); //number
//console.log(typeof(score)); //number

score ="33";
//console.log(typeof score); //string

//convert string to number

let convertNum = Number(score);
//console.log(convertNum); //33

//console.log(typeof(convertNum)); 


score = "33abc" ;    //if we convert these what we get
//console.log(typeof(score)); 

let newConvert = Number(score);
//console.log(newConvert); 
//console.log(typeof(newConvert))




/** note :-
    "33" => 33
    "33abc" => NaN (Not a Number)
    true=>1 ; false => 0
 */


let names = "";

let convertBoolean = Boolean(names);
//console.log(convertBoolean);

/**
    1 - true   ; 0 => false 
    "" => false
    "hello" => true
 */


// string 

let someNumber = 34;
let someString = String(someNumber);
//console.log(someString); //34
//console.log(typeof(someString)); //string

/**
 * operations
 */

let value = 3;
let negValue = -value;// -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%3);
// console.log(2**3); //8

let str1 = "hello ";
let str2 = "programmer";
let str3 = str1 + str2;

//console.log(str3);


// console.log("2"+ 3); //23  string + number => string
// console.log(2 + "3"); //23  number + string => string


// console.log("2" + 3 + 3); //233 string
// console.log(2 + "3" + 3); //233 number

// console.log(2+3+"3"); //53 


/**
 * 
 */

// console.log(+true);   //1
// console.log(+false);       //0
// console.log(+"");   //0

let x = 3;
const y = x++;
//console.log(`x:${x}, y:${y}`); // Expected output: "x:4, y:3"


/** Post-Increment (x++)
 * initial x =3 ;  
 * The post-increment operator increments the variable after its current value is used.
 * First, x's current value (3) is assigned to y
 * Then, x is incremented by 1 (x = 4).
 * 
 * x = 4 (incremented after assignment to y).
y = 3 (assigned the original value of x before increment).
 */


let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`); // Expected output: "a:4, b:4"

/** Pre-Increment (++a)
 * The pre-increment operator increments the variable  before its value is used.
 * First, a is incremented by 1 (a = 4).
 * Then, the updated value of a (4) is assigned to b.
 * 
 * a = 4 (incremented before assignment to b).
 * b = 4 (assigned the updated value of a).

 */


















