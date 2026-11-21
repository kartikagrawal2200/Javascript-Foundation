// ======================================================= Functions ============================================== \\

/* -------------A function is a named, reusable block of code that performs one task. You define it once and then call (run) it as many times 
as you like. A function can receive input values (parameters) and can send back a result (a return value).----------------*/

// --------------------------------------------------------------------------------------------- \\
// =========== Syntax: function declaration ============ \\

// function functionName(parameter1, parameter2) {                    // statements (the function body)
// return result;                                                    // optional: sends a value back
// }
// functionName(argument1, argument2);                             // calling the function


// example 
// function greet() {
// console.log("Welcome to TechNova 2026!");
// }
// function greetStudent(name, branch) {
// console.log(`Hello ${name} from ${branch}!`);
// }
// greet();                                                  // Welcome to TechNova 2026!
// greet();                                                 // Welcome to TechNova 2026!
// greetStudent("Riya", "CSE");                            // Hello Riya from CSE!
// greetStudent("Aman", "ECE");                           // Hello Aman from ECE!

// function add(a, b) {
// return a + b;                                               // return ends the function immediately. So if you want to print anything print it before return or outside the function after return code will not print
// }

// function printSum(a, b) {
// console.log(a + b);                                      // (first printed then again printed downside thats why give undefined next time not "None")
// }

// const total = add(80, 90);                                       
// console.log("Total:", total);                                        // Total: 170
// console.log("Average:", add(80, 90) / 2);                           // Average: 85

// const result = printSum(80, 90);                                    // 170
// console.log("Result:", result);                                    // Result: undefined


// ========== Default parameters ===========

// function calculateFee(amount, discountPercent = 0, gstPercent = 18) {
// const afterDiscount = amount - (amount * discountPercent) / 100;
// return afterDiscount + (afterDiscount * gstPercent) / 100;
// }

// console.log(calculateFee(1000));                                               // 1180
// console.log(calculateFee(1000, 10));                                          // 1062
// console.log(calculateFee(1000, 10, 5));                                      // 945


// ============ Arrow function rules =============== 
// const square = n => n * n;                              // Remember curly bracket{} must not be use in this as it is will give "undefined" bracket required return keyword for it
// const add = (a, b) => a + b;                           // for multi parmaters use bracket() like in code i have use
// const sayHi = () => "Hi there!";
// const percentage = (obtained, total) => {
// const p = (obtained / total) * 100;
// return Math.round(p * 100) / 100;
// };
// const isEven = n => n % 2 === 0;

// console.log(square(9));                                                    // 81
// console.log(add(15, 27));                                                 // 42
// console.log(sayHi());                                                    // Hi there!
// console.log(percentage(412, 500));                                      // 82.4
// console.log(isEven(10), isEven(7))                                     // true false


/* -----  Functions are values In JavaScript a function is a value (its type is "function"), just like a number or a string.
It can be stored in a variable, as you just saw, and even passed to another function as an argument.
Functions that receive other functions are called higher-order functions and the functions passed in are callbacks ----- */

// ============================ Topic 8 Recap =========================== \\
//  ▶ A function is a named, reusable block: function name(params) { \dots {} return value; }; call it with name(args).
//  ▶ Parameters are the names in the definition; arguments are the values in the call. Missing arguments are undefined unless a default is given (gst = 18).
//  ▶ return sends a value back and ends the function; without it the result is undefined.
//  ▶ Function expressions and arrow functions store functions in variables: const add = (a,b) => a + b; (implicit return without braces).
//  ▶ Good functions do one job, have verb names, use parameters and return results.


