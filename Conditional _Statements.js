// ============================= Conditional Statements ==================================== \\
/* A conditional statement lets a program choose which code to run, depending on whether a
condition is true or false. JavaScript has if, else if, else, switch and the ternary operator ? */


// const marks = 92;
// if (marks >= 90) {
//     console.log("A+")
// }
// else if (marks >= 70) {
//     console.log("B+")
// }
// else {
//     console.log("Fail")
// }



/* ========= Convert marks (out of 100) to a grade: 90 and above O, 80–89 A+, 70–79 A, 60–69 B+, 50–59 B,
40–49 C, below 40 F. ========= */

// ================= CODE =================\\

// const marks = prompt("Your Marks?");
// let grade;
// if (marks >= 90) {
// grade = "O";
// } else if (marks >= 80) {
// grade = "A+";
// } else if (marks >= 70) {
// grade = "A";
// 1} else if (marks >= 60) {
// grade = "B+";
// } else if (marks >= 50) {
// grade = "B";
// } else if (marks >= 40) {
// grade = "C";
// } else {
// grade = "F";
// }
// console.log(`Marks: ${marks}, Grade: ${grade}`);



// =============== Switch Explanation ================== \\
// const dayNo = 6;
// let dayName;
// switch (dayNo) {
// case 1: dayName = "Monday"; break;                                // Without break, execution falls through into every following case.
// case 2: dayName = "Tuesday"; break;
// case 3: dayName = "Wednesday"; break;
// case 4: dayName = "Thursday"; break;
// case 5: dayName = "Friday"; break;
// // case 6: dayName = "Saturday"; break;                          // two methods writing for this if you want to write for case the condition is same but then use this
// // case 7:dayName = "Weekend";break;
// case 6:
// case 7:
//     dayName = "weekend";                                        // break ends the switch. Without it, execution “falls through” into the next case.
//     break;
// default:dayName = "Invalid day";
// }
// console.log(dayName);



// ================== The ternary (conditional) operator ======================= \\
/* The ternary operator is a compact if . . . else that produces a value. It has three parts:
------(condition ? valueIfTrue : valueIfFalse)------ */

// const marks = 35;
// const result = marks >= 40 ? "Pass" : "Fail";
// console.log(result);               // Fail

// const items = 1;
// console.log(`You have ${items} ${items === 1 ? "item" : "items"} in your cart`);              // You have 1 item in your cart

// const age = 20;
// const ticket = age < 12 ? "Child" : age >= 60 ? "Senior" : "Adult";
// console.log(ticket);             // Adult


/* ================== Conditional statement Recap ==================== *\
/* ▶ if (condition) { } runs a block only when the condition is truthy; else handles the other case.
   ▶ else if ladders check conditions top to bottom and run only the first true branch: put the most restrictive condition first.
   ▶ Combine conditions with &&, || and !; nest conditions sparingly.
   ▶ switch compares one value with several cases using ===; remember break and default.
   ▶ Ternary: condition ? a : b produces a value; ideal for short choices and inside template literals. */
