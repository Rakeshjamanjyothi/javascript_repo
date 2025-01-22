let name = "hello" + "world ";
let age = 27;

//string INTERPOLLATION

console.log(`my name is ${name} my age is ${age}`);

//string declaration in the other method

const newNAme = new String("hello-am-rakesh");

// String {'hello'}
// 0:"h"
// 1:"e"
// 2:"l"
// 3:"l"
// 4:"o"
// length:5

console.log(newNAme.__proto__); // typeof object
console.log(newNAme);
console.log(newNAme.toUpperCase());

/**
 * substring(start, end) extracts characters between start and end (end not included). CANNOT GIVEN NEGITIVE VALUES
 
 * slice(start, end) works similarly to substring. HERE WE CAN GIVE NEGITIVE VALUES 


 * charAt(index) retrieves a single character at the specified index.
 */

console.log(newNAme.charAt(3));

console.log(newNAme.substring(3, 6)); //lo we get 3 ,4, 5 index values

console.log(newNAme.slice(3, 6)); // Outputs "loW" (characters from index 3 to 5)

console.log(newNAme.indexOf("l")); //here we get index of the chrector

console.log(newNAme.slice(-15, 2)); //negitive values we get the revers direction .

let testName = "hello am rakesh from happy place";
const testName1 = testName.slice(-15, -6); // Extracts characters between the last 15th and 6th from the end.
console.log(testName1); // Output: "from happ"

const testName2 = "   from happ   ";

console.log(testName2);
console.log(testName2.trim()); //remoave extra spaces from starting and ending

/**
 * Whitespace inside the string (between words) is untouched.
 */

let str = "--Hello--";
console.log(str.trim()); // Output: "--Hello--" (No effect on `--`)
console.log(str.replace(/^-+|-+$/g, ""));

/*
string.replace(pattern, replacement)
pattern -> /^-+|-+$/g
replacement -> ""

    /  ->  Delimiters that mark the start and end of the regex.
    ^  ->  Matches the start of the string.
    -+ -> Matches one or more dashes (-), where:
            - is the literal dash character.
            + means "one or more occurrences" of the preceding character.

    | =>  Logical OR, which means "match either the pattern before OR the pattern after this symbol."
    
    -+$  ->  Matches one or more dashes at the end of the string.
    
    $ -> denotes the end of the string.

    g ->  The global flag, which ensures the replacement is applied to all matches in the string, not just the first one.

*/

let str1 = "--Hello-World--";
// Replace leading and trailing dashes
let result = str1.replace(/^-+|-+$/g, "");
console.log(result); // Output: "Hello-World"
/**
 ^-+ matches the -- at the start of the string and removes it.
-+$ matches the -- at the end of the string and removes it.

The middle dash (-) in "Hello-World" is untouched because it's not at the start or end.
 */

let hai = "hello'world'";
let replacedValue = hai.replace(/^h+/g, "H");
console.log(replacedValue); //at starting firdt letter
