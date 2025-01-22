// 2 types of memory

//1 ) stack and heap memory

//premitive type we use stack

//what ever the variable declered we get a copyof that value

let myName = "hello am rakesh";

let myAnotherName = myName;

myAnotherName = "bye bye";

console.log(myName);
console.log(myAnotherName);

//Nop premitive => heap memory usage => take referances does not copoy the data .

let myUser1 = {
  email: "test@example.com",
  age: "23",
};

console.log(myUser1.email); //test@example.com
let myUser2 = myUser1;

myUser2.email = "test@changed.com";

console.log(myUser2); //test@changed.com

console.log(myUser1.email); //test@changed.com  (heap memory we are taking the referamces so if we change the second user it will change the original user1)
