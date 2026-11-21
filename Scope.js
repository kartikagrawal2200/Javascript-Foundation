// --------------------------------------------------------------------------------------------------------------------------------------- \\
// ============================================================ Scope =================================================== \\
/* The scope of a variable is the part of the program where that variable exists and can be used. A variable created inside a function, 
for example, cannot be used outside it. JavaScript has three kinds of scope: 
▶ Global scope: variables declared outside every function and block. They can be used anywhere.
▶ Function scope: variables declared inside a function. They exist only inside that function (also called local variables).
▶ Block scope: variables declared with let or const inside a pair of braces { } (an if block, for example). They exist only inside that block */


// ======= Syntax ======= \\
// const a = 1;                                    // global scope
// function demo() {
// const b = 2;                                  // function scope: only inside demo
// if (true) {
// const c = 3;                                // block scope: only inside these braces
// console.log(a, b, c);                      // all three visible here
// }
// }


// Example1 : Global and function (local) scope \\
// const college = "LPU";                                                  // global
// function showStudent() {
//    const studentName = "Riya";                                         // local to showStudent
//    console.log(studentName, "studies at", college);                    // Riya studies at LPU
// }

// showStudent();
// console.log(college);                                               // LPU
// console.log(studentName);                                           // Uncaught ReferenceError: studentName is not defined


// Example 2: Block scope: let/const versus var \\
// const marks = 45
// if (marks >= 40) {
//    const grade_const = "B"
//    var grade_var = "B"
//    console.log("const variable:" , grade_const)                        // const variable: B
// }
// console.log("var variable" ,grade_var)                               // var variable: B
// console.log("const variable" ,grade_const)                          // Uncaught ReferenceError: grade_const is not defined


/* ★ Declare before the block if you need the value after it If a value calculated inside an if is needed
later, declare the variable before the if with let, and only assign it inside, let grade; if (\dots ) { grade = "A"; }. */

// const marks = 76;
// let grade;                                          // we define its first then make changes in scope level block then after we print it

// if (marks >= 90) {
// grade = "O";
// } else if (marks >= 80) {
// grade = "A+";
// } else if (marks >= 70) {
// grade = "A";
// } else if (marks >= 60) {
// grade = "B+";
// } else if (marks >= 50) {
// grade = "B";
// } else if (marks >= 40) {
// grade = "C";
// } else {
// grade = "F";
// }
// console.log(`Marks: ${marks}, Grade: ${grade}`);


// ================== Nested functions and the scope chain ======================= \\
/* A function written inside another function can use the variables of the outer function. This is called
lexical scope: what a function can see is decided by where it is written in the code.*/

// example ------>
// const gstRate = 18;                                                 // global

// function makeBill(item, price) {
//    const discount = 10;                                           // local to makeBil
//    function finalAmount() {                                      // nested function
//       const afterDiscount = price - (price * discount) / 100;
//       return afterDiscount + (afterDiscount * gstRate) / 100;
//    }
//    return `${item}: Rs. ${finalAmount()}`;
// }
// console.log(makeBill("Hoodie", 1000));


// =============== Hoisting and the temporal dead zone ====================== \\
/* Before running a scope, JavaScript first scans it for declarations. This behaviour is called hoisting
(as if declarations were “lifted” to the top). Different declarations are hoisted differently: */

// example ------>
// console.log(welcome("Riya"));                                          // works: declaration is hoisted (Welcome, Riya!)

// function welcome(name) {
//    return `Welcome, ${name}!`;
// }
// 6
// console.log(oldVar);                                              // undefined, not an error (undefined)
// var oldVar = "var value";

// console.log(newLet);                                           // error: temporal dead zone (Uncaught ReferenceError: Cannot access 'newLet' before initialization)

// let newLet = "let value";


// ---- Accidental globals ---- \\
/* Assigning to a name that was never declared anywhere creates a global variable silently (in normal scripts) */

// example ------>
// function setHighScore() {
//    highScore = 950;                                // forgot let/const!
// }
// setHighScore();
// console.log(highScore);     // 950               // it leaked into the global scope

// ============= A function remembers its scope (preview of closures) =========== \\
/* A function keeps access to the variables of the scope where it was created, even after the outer function has finished. This is called a closure. */

// example ------>
// function makeCounter() {
//    let count = 0;                          // private to makeCounter
//    return () => {
//       count += 1;
//       return count;
//    };
// }

// const nextTicket = makeCounter();
// console.log(nextTicket());                         // 1
// console.log(nextTicket());                         // 2
// console.log(nextTicket());                         // 3


// ================================ Topic 9 Recap ======================================== \\
// ▶ Scope = where a variable can be used. Global (everywhere), function (inside the function), block (let/const inside { }).
// ▶ Lookup goes outward along the scope chain, never inward; inner functions can use outer variables (lexical scope).
// ▶ var ignores blocks; let/const respect them.
// ▶ Shadowing: an inner variable with the same name hides the outer one.
// ▶ Hoisting: function declarations work before their line; var gives undefined; let/const throw an error in the temporal dead zone.
// ▶ Avoid globals and accidental globals; prefer parameters and return values. Closures let a function remember its scope (Unit V).

// ======================= questions ======================= \\
/* (question 1) Write makeWallet(startBalance) that returns an arrow function spend(amount); each call reduces a private balance and returns
the new balance. Show that the balance cannot be changed from outside. */

// function makeWallet(initialBalance = 0) {
//   let balance = initialBalance;

//   return {
//    deposit(amount) {
//       if (amount <= 0) {
//         console.log("Deposit amount must be positive.");
//         return balance;
//       }
//       balance += amount;
//       return balance;
//    },
//    spend(amount) {
//       if (amount <= 0) {
//         console.log("Spend amount must be positive.");
//         return balance;
//       }
//       if (amount > balance) {
//         console.log("Insufficient balance.");
//         return balance;
//       }
//       balance -= amount;
//       return balance;
//    },
//    getBalance() {
//       return balance;
//    }
//   };
// }

// const wallet = makeWallet(500);
// console.log(wallet.deposit(200)); // 700
// console.log(wallet.spend(150));   // 550
// console.log(wallet.getBalance()); // 550
// console.log(wallet.balance);      // undefined (private inside closure)
