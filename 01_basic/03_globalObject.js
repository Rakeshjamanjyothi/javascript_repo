//Global object:
/*
    1)globalThis
    2)infinity
    3)null
    4)undefined
*/

// globalThis;
globalThis.sharedData = { user: "Alice", role: "admin" };

console.log(globalThis.sharedData);

//globalThis is a global object introduced in ECMAScript 2020 (ES11) to provide a standard way to access the global object across different environments (e.g., browsers, Node.js, etc.).

if (typeof globalThis.window !== "undefined") {
  console.log("Running in a browser");
} else if (typeof globalThis.global !== "undefined") {
  console.log("Running in Node.js");
}

//Infinity

//It is a special numeric value, not a keyword.
console.log(Infinity); //infinity
console.log(-Infinity); //-infinity

console.table([1 / 0, -1 / 0]);

console.log(Number.MAX_VALUE * 2); // Output: Infinity (exceeds the max value)

//NULL

//null is a special value in JavaScript that represents the intentional absence of any object value
// primitive value

let emptyValue = null; //Explicitly setting it to "no value"
console.log(emptyValue); //Output: null;

console.log(typeof emptyValue); //Output: "object" (quirk in JavaScript)

let obj = { key: null }; // Represents no value for "key"
console.log(obj.key); // Output: null

//undefined
//undefined is a primitive value automatically assigned to variables that have been declared but not initialized.

let uninitializedVariable;
console.log(uninitializedVariable); // Output: undefined
