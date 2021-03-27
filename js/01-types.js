//1        //2        //3
var username = 'instructor';
var password = 'Letmein1234!';
var instructorId = 5;
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
var greeting = 'Hello';
//Numbers
var age = 40;
var currentYear = 2018;
//ES6 octal literals
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
//Strings
var companyName;
companyName = 'Eleven Fifty';
var appName = 'Twitter';
appName = 'Instagram';
//Unknown variable type
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
//Void - no type at all
function sayHelloToAll() {
    console.log('Hello to All!');
}
sayHelloToAll();
//Null and Undefined
var undefinedVariable = undefined;
var nullVariable = null;
//Tuple
//Declare a tuple type - must be entered in proper order!
var usernameAndId;
//Initialize it
usernameAndId = [1, 'kennisreally40']; // OK
//# sourceMappingURL=01-types.js.map