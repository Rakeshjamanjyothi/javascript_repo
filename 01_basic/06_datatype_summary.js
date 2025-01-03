//primitive  Datatype (call by value not memory)

// string ,number,boolean,null,undefined ,symbol,bigint

//js is static or dynamic typed ();

const score = 100;
const scoreValue = 100.3;

const loggedIn = false;
const noValue = null ;
let userName ;

const id =Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId );  //false 




//references  type or non - primitive 

//Array,objects,function   //functions , for function it gets object function

//array
const heros = ["hello" , "hai", "how"];

//object
let myObj = {
    name : "rakesh",
    age : 25,
}

//function

const myFun = function(){
    console.log("hello");
}

//return value from typeof

/**PRIMITIVE DATA TYPE 
 * datatype     example          typeof return
 *Number	=> 42, 3.14, NaN => "number" => Includes integers, floats, Infinity, and NaN.
String	=>  "hello"	=> "string"	=> Represents text data enclosed in quotes.
Boolean => 	true, false	=> "boolean" =>	Represents logical true or false.
BigInt	=> 123=> "bigint"	=> For very large integers (ES2020 feature).
Symbol	=> Symbol('id') => 	"symbol"	=> Unique identifiers for object properties (ES6).
Undefined	=>  let x; => 	"undefined"	=> Variable is declared but not assigned a value.
Null    => 	null	=> "object" (quirk) =>	Represents the absence of any value. This is a known bug in JavaScript.
 * 
 */


/**
 *   object -> object 
 *   array -> object
 *   date -> object
 *  regExp -> object 
 * map -> object 
 * weakset -> object
 * weakmap -> object
 * error -> object 
 *  Function -> Function
 * 
 */

