// -------------------------------------------------------------------------------------------------------------------- \\
// ================================================= Arrays and Array Operations ======================================= \\
// what is it ------>
/* An array is an ordered list of values stored in a single variable. Each value in the list is called an
element (or item), and each element has a numbered position, its index, starting from 0. */


// Synatx ------>
// const arrayName = [value0, value1, value2];          // create
// arrayName[index]                                    // read one element
// arrayName[index] = newValue;                       // change one element
// arrayName.length                                  // number of elements


// example ------>
// const subjects = ["HTML", "CSS", "JS", "React", "Node"];
// console.log(subjects);                                  // ['HTML', 'CSS', 'JS', 'React', 'Node']
// console.log(subjects.length);                           // 5
// console.log(subjects[0], subjects[2]);                  // HTML JS
// console.log(subjects[subjects.length - 1]);             // Node
// console.log(subjects.at(-1));                           // Node
// console.log(subjects[10]);                              // undefined

// subjects[2] = "JavaScript";           // change an element
// console.log(subjects);                                  // ['HTML', 'CSS', 'JavaScript', 'React', 'Node']

// const empty = [];                                       
// console.log(empty.length, Array.isArray(empty));          // 0 true


// ========= Adding and removing elements ============== \\
/* push/pop work at the end; unshift/shift work at the start. */

// example -------->
// const queue = ["Aman", "Riya"];
// queue.push("Neha");                                 // join at the end
// console.log(queue.push("Neha"));            // 4    // push return lenght of the array
// console.log(queue);                                 // ['Aman', 'Riya', 'Neha']
// const served = queue.shift();                       // first person leaves
// console.log(served, "served;", queue);              // Aman served; ['Riya', 'Neha']
// queue.unshift("Professor");                         // jumps to the front
// console.log(queue);                                 // ['Professor', 'Riya', 'Neha']

// const plates = ["P1", "P2", "P3"];
// const topPlate = plates.pop();                      // take the last plate
// console.log(topPlate, plates);                      // P3 ['P1', 'P2']
// console.log(plates.push("P4", "P5"));        // 4   // push returns the new lengt
// console.log(plates);                                // ['P1', 'P2', 'P4', 'P5']


// ============ Array Methods ============= \\

// 1. Adding and removing at the END: push() and pop() (mutates original array)
// const stack = [10, 20, 30];
// stack.push(40);                                // adds 40 to the end -> [10, 20, 30, 40]
// const removedEnd = stack.pop();                // removes & returns 40 -> [10, 20, 30]
// console.log("push/pop:", stack, "popped:", removedEnd);      // push/pop: [ 10, 20, 30 ] popped: 40 

// 2. Adding and removing at the START: unshift() and shift() (mutates original array)
// const queue = [10, 20, 30];
// queue.unshift(5);                                // adds 5 to the front -> [5, 10, 20, 30]
// const removedStart = queue.shift();              // removes & returns 5 -> [10, 20, 30]
// console.log("unshift/shift:", queue, "shifted:", removedStart);     // unshift/shift: [ 10, 20, 30 ] shifted: 5

// 3. Searching: indexOf() and includes() (does NOT mutate aaray)
// const nums = [10, 20, 30, 20];
// console.log("indexOf(10):", nums.indexOf(10));           // 0 (returns -1 if not found)
// console.log("includes(20):", nums.includes(20));         // true

// 4. Extracting a copy without changing original: slice(start, end)
// // Includes 'start' index, stops before 'end' index
// const a = [10, 20, 30, 40, 50];
// console.log("slice(1, 3):", a.slice(1, 3));              // [20, 30]
// console.log("a after slice:", a);                        // unchanged: [10, 20, 30, 40, 50]

// 5. Removing / replacing / inserting in-place: splice(start, deleteCount, ...items)
// // Mutates the original array and returns removed items
// const items = [10, 20, 30, 40];
// const removedItems = items.splice(1, 1);                 // at index 1, remove 1 item (20)
// console.log("splice(1, 1) removed:", removedItems, "remaining:", items);        // splice(1, 1) removed: [ 20 ] remaining: [ 10, 30, 40 ]

// 6. Combining arrays into a new array: concat() (does NOT mutate aaray)
// const base = [10, 20, 30];
// const combined = base.concat([40, 50]);                       
// console.log("concat:", combined, "original:", base);                // concat: [ 10, 20, 30, 40, 50 ] original: [ 10, 20, 30 ]

// 7. Joining elements into a string: join(separator) (does NOT mutate aaray)
// const words = ["HTML", "CSS", "JS"];
// console.log('join(" - "):', words.join(" - "));            // join(" - "): HTML - CSS - JS

// 8. Reversing and sorting (both mutate the original array!)
// const rev = [1, 2, 3];
// rev.reverse();
// console.log("reverse:", rev);                      // reverse: [ 3, 2, 1 ]

// Note: default .sort() sorts strings/UTF-16 order; pass a compare function for numbers
// const scores = [10, 2, 100, 25];
// scores.sort((x, y) => x - y);                           // ascending numeric order
// console.log("sorted numbers:", scores);                 // sorted numbers: [ 2, 10, 25, 100 ]
// scores.sort((a, b) => b - a);                           // numeric descending
// console.log(scores);                                    // [ 100, 25, 10, 2 ]

// 9. Indexing from the end: at(-1)
// const letters = ["a", "b", "c", "d"];
// console.log("at(-1):", letters.at(-1));                 // "d" (last element)

// 10. Shallow copy via Spread syntax and ,finding the maximum, destructuring and swapping: [...arr]
// const copy = [...letters];                              
// copy.push("e");                                  
// console.log("spread copy:", copy, "original letters:", letters);       // spread copy: [ 'a', 'b', 'c', 'd', 'e' ] original letters: [ 'a', 'b', 'c', 'd' ] (on copying in another varaible or changing something in copying array does not reflect in orginial array)
// console.log(Math.max(...scores), Math.min(...scores));                 // 95 64 (Maximum and minimum)
// const [first, second, ...rest] = letters;                              // destructuring
// console.log(first, second, rest);                                      // 72 95 [64, 88]
// let left = "Aman", right = "Priya";
// [left, right] = [right, left]; // swap in one line                     // swap in one line
// console.log(left, right);                                              // Priya Aman

// 11. Checking if a value is an array: Array.isArray()
// console.log("Array.isArray(letters):", Array.isArray(letters));           // Array.isArray(letters): true               
// console.log('Array.isArray("abc"):', Array.isArray("abc"));               // Array.isArray("abc"): false

/* Quick Summary: Mutating vs. Non-Mutating
▶ Mutate the original array: push, pop, unshift, shift, splice, reverse, sort (watch out for accidental changes if you still need the original order).
▶ Return a new value/array without mutating: indexOf, includes, slice, concat, join, at, and [...arr]. */


// ================================================== Topic 10 Recap =============================================== \\
// ▶ An array is an ordered list: const a = [x, y, z];. Indexes start at 0; a.length; last element a[a.length - 1] or a.at(-1).
// ▶ Ends: push/pop (end), unshift/shift (start); these change the array.
// ▶ Search: includes, indexOf. Parts: slice (copy) vs splice (change).
// ▶ concat, spread [...a, ...b], join, reverse, sort (text by default; use (a, b) => a - b for numbers).
// ▶ Destructuring: const [x, y] = a;. Arrays are shared by reference: copy with [...a]; === compares references.


// ============================== questions ================================ \\
/* (question 1)  Write a function addToCart(cart, item) that adds the item only if it is not already in the cart, and returns a message saying whether it was added or already present. */

// const cart = [];
// // 1. Add an item to the end of the cart
// function addItem(itemName) {
//   cart.push(itemName);                                 // item is added to cart
//   console.log(`Added "${itemName}" -> Cart (${cart.length}): ${cart.join(", ")}`);
// }
// // 2. Remove a specific item from the cart if it exists
// function removeItem(itemName) {
//   const index = cart.indexOf(itemName);
//   if (index === -1) {                                 // if item not found index return -1
//     console.log(`"${itemName}" is not in the cart.`);
//     return;
//   }
//   const [removed] = cart.splice(index, 1);            // updated cart after sucessfull remove the item
//   console.log(`Removed "${removed}" -> Cart (${cart.length}): ${cart.join(", ") || "Empty"}`);         // in last empty is used if cart has one item then it will not show comma insted of this blackspace will shown
// }
// // 3. Remove the last added item (undo / pop)
// function removeLastItem() {
//   if (cart.length === 0) {                            // check wheter cart is empty or not 
//     console.log("Cart is already empty.");
//     return;
//   }
//   const removed = cart.pop();                        // removed last item from cart 
//   console.log(`Popped last item "${removed}" -> Cart (${cart.length}): ${cart.join(", ") || "Empty"}`);
// }
// // 4. Show current cart summary
// function showCart() {
//   if (cart.length === 0) {
//     console.log("Cart is empty (0 items).");
//     return;
//   }
//   console.log(`Items (${cart.length}): ${cart.join(" | ")}`);
// }
// // --- Test Run ---
// showCart();                         // Cart is empty (0 items).
// addItem("Notebook");                // Added "Notebook" -> Cart (1): Notebook
// addItem("Pen");                     // Added "Pen" -> Cart (2): Notebook, Pen
// addItem("USB Drive");               // Added "USB Drive" -> Cart (3): Notebook, Pen, USB Drive
// showCart();                         // Items (3): Notebook | Pen | USB Drive

// removeItem("Pen");                  // Removed "Pen" -> Cart (2): Notebook, USB Drive
// removeItem("Mouse");                // "Mouse" is not in the cart.
// removeLastItem();                   // Popped last item "USB Drive" -> Cart (1): Notebook
// showCart();                         // Items (1): Notebook


/* (question 2) Write a function analyzeMarks(marksArray) that returns a new array with the three highest marks in descending order, without changing the original array. */

// function analyzeMarks(marks) {
//   if (!Array.isArray(marks) || marks.length === 0) {
//     console.log("Please provide a non-empty array of marks.");
//     return null;
//   }
//   // Spread syntax (...) unpacks array elements for Math.max / Math.min
//   const highest = Math.max(...marks);
//   const lowest = Math.min(...marks);
//   // Copy with [...marks] before sorting so the original array is not mutated
//   const sortedAsc = [...marks].sort((a, b) => a - b);
//   const sortedDesc = [...marks].sort((a, b) => b - a);
//   // Calculate total without a loop (for 5 marks) or average via helper
//   const total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
//   const average = total / marks.length;

//   console.log("=== Marks Report ===");
//   console.log("Original marks:", marks.join(", "));                  // Original marks: 78, 92, 64, 85, 88
//   console.log("Total subjects:", marks.length);                      // Total subjects: 5
//   console.log("Highest mark:", highest);                             // Highest mark: 92
//   console.log("Lowest mark:", lowest);                               // Lowest mark: 64
//   console.log("Lowest to highest:", sortedAsc.join(" < "));          // Lowest to highest: 64 < 78 < 85 < 88 < 92
//   console.log("Highest to lowest:", sortedDesc.join(" > "));         // Highest to lowest: 92 > 88 > 85 > 78 > 64
//   console.log("First & last mark:", marks.at(0), "and", marks.at(-1));       // First & last mark: 78 and 88 
//   console.log("Average (approx):", average.toFixed(2));                      // Average (approx): 81.40
//   console.log("Original array unchanged:", marks);                           // Original array unchanged: [ 78, 92, 64, 85, 88 ]

//   return { highest, lowest, sortedAsc, sortedDesc };
// }
// // --- Test Run ---
// const subjectMarks = [78, 92, 64, 85, 88];
// analyzeMarks(subjectMarks);

