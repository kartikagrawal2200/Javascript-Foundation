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
