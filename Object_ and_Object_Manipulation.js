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


// =============== Adding, changing and deleting properties =================== \\
// const fest = { title: "Hackathon", fee: 200 };

// fest.venue = "Block 34";                         // add a new property
// fest["date"] = "14 November";                    // add with bracket notation
// fest.fee = 150;                                  // change an existing property
// console.log(fest);                               // {title: 'Hackathon', fee: 150, venue: 'Block 34', date: '14 November'}

// delete fest.date;                                // remove a property
// console.log(fest);                               // {title: 'Hackathon', fee: 150, venue: 'Block 34'}

// console.log("venue" in fest, "date" in fest);    // true false
// console.log(Object.hasOwn(fest, "fee"));         // true


// ==================================== Methods and this ======================================= \\
// example ------>
// const account = {
//    owner: "Aman",
//    balance: 1000,
//    deposit(amount) {
//       this.balance += amount;
//       return this.balance;
//    },
//    withdraw(amount) {
//       if (amount > this.balance) {
//          return "Insufficient balance";
//       }
//       this.balance -= amount;
//    return this.balance;
//    },
//    summary() {
//       return `${this.owner} has Rs. ${this.balance}`;
//    }
// };

// console.log(account.deposit(500));                   // 1500
// console.log(account.withdraw(2000));                 // Insufficient balance
// console.log(account.withdraw(300));                  // 1200
// console.log(account.summary());                      // Aman has Rs. 1200


// ===================== Arrays of objects ======================= \\
// const events = [
//    { title: "Quiz", fee: 100, seats: 60 },
//    { title: "Hackathon", fee: 200, seats: 40 },
//    { title: "Robo Race", fee: 150, seats: 25 }
// ];

// console.log(events.length);                             // 3
// console.log(events[1]);                                 // { title: 'Hackathon', fee: 200, seats: 40 }
// console.log(events[1].title, events[1].fee);            // Hackathon 200
// console.log(events[events.length - 1].title);           // Robo Race

// events.push({ title: "Talks", fee: 0, seats: 200 });
// events[0].seats -= 1; // one seat booked
// console.log(events.length, events[0].seats);            // 4 59

// const totalSeats = events[0].seats + events[1].seats + events[2].seats + events[3].seats;
// console.log(`Total seats left: ${totalSeats}`);         // Total seats left: 324


// ============================== Getting keys, values and entries =========================== \\
// const marks = {
//   html: 92,
//   css: 85,
//   js: 95,
// };

// // 1. Object.keys(obj) -> returns an array of property names (keys)
// const subjects = Object.keys(marks);
// console.log("Keys:", subjects);                           // ['html', 'css', 'js']
// console.log("Subjects:", subjects.join(", "));            // "html, css, js"

// // 2. Object.values(obj) -> returns an array of property values
// const scores = Object.values(marks);
// console.log("Values:", scores);                                  // [92, 85, 95]
// console.log("Best score:", Math.max(...scores));                 // 95

// // 3. Object.entries(obj) -> returns an array of [key, value] pairs
// const pairs = Object.entries(marks);
// console.log("Entries:", pairs);                   // [['html', 92], ['css', 85], ['js', 95]]
// console.log("Total entries:", pairs.length, "First pair:", pairs[0]);      // 3 ['html', 92]

// // 4. Shallow copying & adding/overriding properties with Spread ({ ...o })
// const original = { a: 1, b: 2 };
// const updatedCopy = { ...original, c: 3 };            // copies original and adds c: 3
// console.log("Spread copy:", updatedCopy);             // { a: 1, b: 2, c: 3 }
// console.log("Original untouched:", original);         // { a: 1, b: 2 }

// // 5. Copying / merging with Object.assign(target, source)
// const assignedCopy = Object.assign({}, original, { b: 20, d: 4 });
// console.log("Object.assign:", assignedCopy);                 // { a: 1, b: 20, d: 4 }

// // 6. Locking an object against changes with Object.freeze(obj)
// const config = Object.freeze({
//   course: "CSE326",
//   maxMarks: 100,
// });

// config.maxMarks = 200; // ignored (throws TypeError in strict mode)
// config.newProp = "test";                                  // ignored
// console.log("Frozen object:", config);                    // { course: 'CSE326', maxMarks: 100 }


// =============================== Topic 11 Recap ==================================== \\
// ▶ An object groups related data as key: value properties: { name: "Riya", cgpa: 8.4}.
// ▶ Read with obj.key or obj["key"] (brackets for variable or unusual keys); missing properties give undefined.
// ▶ Add or change by assignment, remove with delete, check with in or Object.hasOwn.
// ▶ Methods are functions in objects; inside them this is the object (do not use arrow functions as such methods).
// ▶ Nesting: student.address.city; use ?. for possibly missing parts. Arrays of objects are the Web’s favourite data structure.
// ▶ Object.keys, Object.values, Object.entries; copy with { ...obj } (shallow); objects are shared by reference; destructuring and shorthand propertie
