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


