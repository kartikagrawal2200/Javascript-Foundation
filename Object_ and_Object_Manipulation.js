// ================================================================== Objects and Object Manipulation ======================================================== \\
/* An object is a collection of related values stored under names. Each named value is called a property and is written 
as a key: value pair. When a property’s value is a function, it is called a method. */ 

// Syntax ------->
// const objectName = {
// key1: value1,                              // properties separated by commas
// key2: value2,
// "key with spaces": value3,                // quotes needed for unusual key names
// methodName() { ... }                      // a method (a function stored in the object)
// };
// objectName.key1                           // dot notation: read a property
// objectName["key1"]                        // bracket notation: same thing, key as a string

// example ------>
// const student = {
// name: "Riya Sharma",
// regNo: "12415678",
// section: "K24AB",
// cgpa: 8.4,
// isHosteller: true
// };

// console.log(student);                                                  // {name: 'Riya Sharma', regNo: '12415678', section: 'K24AB', cgpa: 8.4, isHosteller:, true}
// console.log(student.name);                                             // Riya Sharma
// console.log(student["section"]);                                       // K24AB
// console.log(`${student.name} has CGPA ${student.cgpa}`);               // Riya Sharma has CGPA 8.4
// console.log(student.email);                                            // undefined

// const field = "regNo";
// console.log(student[field]);                                           // 12415678
