//1        //2        //3
let username: string = 'instructor';
let password: string = 'Letmein1234!';
let instructorId: number = 5;

/* 1. We declare a variable. 2. We declare the variables type. 
3. We initialize the variable with a value of that type.
*/

// declaring a value and type without initializing
// let password: string;
// let phoneNumber: number;
// let email: string;
// let socialSecurity: number;
// let isMarried: boolean;

// implicit typing - where we don't have to declare a type:
let greeting = 'Hello';

//Numbers
let age: number = 40;
let currentYear: number = 2018;
//ES6 octal literals
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

//Strings
let companyName: String;
companyName = 'Eleven Fifty';

let appName: string = 'Twitter';
appName = 'Instagram';

//Unknown variable type

let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

//Void - no type at all
function sayHelloToAll(): void {
  console.log('Hello to All!');
}

sayHelloToAll();

//Null and Undefined

let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

//Tuple
//Declare a tuple type - must be entered in proper order!
let usernameAndId: [number, string];
//Initialize it
usernameAndId = [1, 'kennisreally40']; // OK
