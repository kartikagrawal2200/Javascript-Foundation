// console.log(typeof "Kartik");
// console.log(typeof 98);
// console.log(typeof true);
// console.log(typeof 8.5);
// console.log(typeof undefined)
// console.log(typeof null);              //null is its own primitive type
// console.log(typeof 25n);
// console.log(typeof { name: "Riya" });
// console.log(typeof [10, 20, 30]);
// console.log(typeof "86");


// console.log(Number("450"), Number("3.75"), Number(" 12 "));    //450 3.75 12
// console.log(Number("12abc"), Number(""), Number(true));       //NaN 0 1
// console.log(String(2026), String(true));                     //2026 true
// console.log(Boolean(1), Boolean(0), Boolean("hello"), Boolean(""));   //true false true false


// ================== Operations =================== \\
// ================================================= \\
//  Implicit conversion (coercion) surprises
// console.log("5" + 2);                                  // + with a string joins text==>(52)
// console.log("5" - 2);                                 // - only works on numbers==>(3)
// console.log("5" * "2");                              //(10)
// console.log(true + 1);                              //(2)
// console.log("Total: " + 10 + 5);                               //(Total: 105)
// console.log("Total: " + (10 + 5));                            //(Total: 15)
// console.log(10 + 5 + " is the total");                       //(15 is the total)


/* When you assign a primitive to another variable (let b = a;), the
value is copied. Changing a later does not change b. Objects and arrays behave differently (they
are shared, not copied) */ 


// ====================== String Expression ===================== \\
// ============================================================== \\
// const word = "Tech nova";
// console.log(word.length);
// console.log(word[0], word[4]);
// console.log(word[word.length - 1]); // last character
// console.log(word.at(-1), word.at(-2)); // counting from the end
// console.log(word[20]); // no such position
// word[0] = "X"; // try to change a character
// console.log(word);
// console.log(word.toLowerCase());
// console.log(word.toUpperCase());
// console.log(word.trim());
// console.log(word.trimStart());  
// console.log(word.trimEnd());
// console.log(word.includes());
// console.log(word.startsWith());
// console.log(word.split(" "));
// console.log("7".padStart(5, "0"));
// console.log(word.charAt(5));
// console.log(word.concat("!"));
// console.log(word.indexOf("n"));


// ======================== Numbers And Boolean values ====================== \\
// ========================================================================== \\
// const a = 0.300000000000000000
// console.log(a.toFixed(2));
// console.log((1234567.5).toLocaleString("en-IN"));
// const qty = Number("five");
// console.log(qty, typeof qty);
// console.log(qty === NaN);              // never works!
// console.log(Number.isNaN(qty))
// console.log(parseInt("42px", 10), parseFloat("3.5kg"));
// console.log(Number.MAX_SAFE_INTEGER);      // bigger whole numbers JavaScript has the bigint type (9007199254740993n)

// // ===== Frequently used Math methods (CSE326 Unit 4) ===== \\

// console.log(Math.round(4.5));                // Rounds to the nearest whole number (.5 goes up) -> 5
// console.log(Math.floor(4.9));               // Rounds down -> 4
// console.log(Math.ceil(4.1));               // Rounds up -> 5
// console.log(Math.trunc(-4.7));            // Removes the decimal part -> -4
// console.log(Math.abs(-12));                // Absolute value (distance from 0) -> 12
// console.log(Math.max(4, 9, 2));           // Largest of the arguments -> 9
// console.log(Math.min(4, 9, 2));          // Smallest of the arguments -> 2
// console.log(Math.pow(2, 3));               // Power (same as 2 ** 3) -> 8
// console.log(Math.sqrt(81));               // Square root -> 9
// console.log(Math.PI);                    // The constant pi (a property, no brackets) -> 3.141592653589793
// console.log(Math.random());             // A random decimal from 0 (included) to 1 (not included)


