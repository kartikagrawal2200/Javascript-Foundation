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

