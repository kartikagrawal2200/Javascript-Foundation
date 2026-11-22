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


// ================ Array Methods ================ \\
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

// 9. Indexing from the end: at(-1)
// const letters = ["a", "b", "c", "d"];
// console.log("at(-1):", letters.at(-1));                 // "d" (last element)

// 10. Shallow copy via Spread syntax: [...arr]
// const copy = [...letters];                              
// copy.push("e");                                  
// console.log("spread copy:", copy, "original letters:", letters);          // spread copy: [ 'a', 'b', 'c', 'd', 'e' ] original letters: [ 'a', 'b', 'c', 'd' ] (on copying in another varaible or changing something in copying array does not reflect in orginial array)

// 11. Checking if a value is an array: Array.isArray()
// console.log("Array.isArray(letters):", Array.isArray(letters));           // Array.isArray(letters): true               
// console.log('Array.isArray("abc"):', Array.isArray("abc"));               // Array.isArray("abc"): false
