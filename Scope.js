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

