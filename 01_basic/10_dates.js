//dates

let myDate = new Date();
console.log(myDate); //2025-01-24T11:31:37.608Z

console.log(myDate.toString()); //Fri Jan 24 2025 17:01:37 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); //Fri Jan 24 2025

console.log(myDate.toLocaleString()); //1/24/2025, 5:03:14 PM

console.log(typeof myDate); //object

//declare a New Date object

const myNewDate = new Date(2025, 0, 23);
console.log(myNewDate); //2025-01-22T18:30:00.000Z

console.log(myNewDate.toDateString()); //Thu Jan 23 2025

//in javascript month starts with 0 - jan;

//firsingle digit month start from 0 - jan
//double digit month start from 01 - jan

const myNewDateNew = new Date("2025-01-3");
console.log(myNewDateNew.toDateString()); //Fri Jan 03 2025

const myNewDateNew1 = new Date("03-01-2025");
console.log(myNewDateNew1.toLocaleDateString()); //3/1/2025

/**
 * Time stamp
 */

let myTimeStamp = Date.now();
console.log(myTimeStamp); //1737719294638

console.log(myNewDateNew1.getTime()); //milli seconds

//compare allways in milli seconds

console.log(Math.floor(myTimeStamp / 1000)); //convert into seconds

let newDate1 = new Date();
console.log(newDate1);

console.log(newDate1.getDate());
console.log(newDate1.getDay());

//customized date format using these toLocalString
console.log(
  newDate1.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
  })
);
