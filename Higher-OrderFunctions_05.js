Heading: Higher-OrderFunctions
Meaning: This heading introduces the idea of simplifying complex programs using reusable functions like sum and range —
 which are examples of higher-order abstractions. These help reduce bugs and improve clarity.

 let total = 0, count = 1;        // Declare two variables: total starts at 0, count at 1
while (count <= 10) {           // Loop runs as long as count is less than or equal to 10
  total += count;               // Add the current count to total (running sum)
  count += 1;                   // Increment count by 1 on each iteration
}
console.log(total);             // Print the final total (sum of numbers from 1 to 10)
// → 55



console.log(sum(range(1, 10))); // Call the sum function on the result of range(1, 10)
// This code is shorter and easier to understand
// It expresses *what* we want (sum of a range) instead of *how* to do it (loop)
// But behind the scenes, both `sum` and `range` contain logic like loops or counters



Heading: Abstraction
Meaning: This section explains the concept of abstraction in programming. Abstraction helps us solve problems by focusing on 
what we want to achieve instead of how to do every small step, making code simpler and clearer.


// This section does not contain code but uses a cooking analogy:
// First Recipe: Lists every detailed step like "cut with a knife" – similar to writing low-level code.
// Second Recipe: Uses abstract terms like "chop", "simmer", "soak" – similar to using functions or higher-level concepts in code.

// In programming:
// Low-level abstraction = step-by-step instructions (like recipe 1)
// High-level abstraction = meaningful, reusable terms/functions (like recipe 2)

// Example:
// Instead of writing:
//   total = 0; for each item: total += item;
// You can write:
//   total = sum(items);

// The second way is shorter, clearer, and easier to understand—just like the second recipe.


Heading: Abstracting Repetition
Meaning: This section shows how to abstract repetitive actions using functions, so we can reuse logic 
like loops in a cleaner and more flexible way by passing other functions as arguments.




// Basic for loop that logs numbers 0 to 9
for (let i = 0; i < 10; i++) {
  console.log(i);                  // logs i in each iteration
}

// Abstracted version using a named function
function repeatLog(n) {
  for (let i = 0; i < n; i++) {    // repeats n times
    console.log(i);               // logs i in each iteration
  }
}

// More flexible abstraction using a function parameter
function repeat(n, action) {
  for (let i = 0; i < n; i++) {    // repeats n times
    action(i);                    // performs the 'action' function on i
  }
}

repeat(3, console.log);           
// → 0
// → 1
// → 2
// Here, console.log is passed as the action

// Another example using an inline (arrow) function
let labels = [];                   // initialize empty array

repeat(5, i => {
  labels.push(`Unit ${i + 1}`);    // add "Unit 1" to "Unit 5" to array
});

console.log(labels);              
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
// The arrow function is passed as the action and used to push labels

// Structure:
// - repeat() is like a loop wrapper
// - The function passed to repeat() defines what should happen each time
// - This makes the loop logic reusable with different actions



Heading: Higher-Order Functions
Meaning: Higher-order functions are functions that take other functions as arguments or return functions. This lets us write reusable, 
flexible, and powerful abstractions over behavior (actions), not just values.


// 1. Function that creates another function
function greaterThan(n) {          
  return m => m > n;               // returns a new function: (m) => m > n
}

let greaterThan10 = greaterThan(10);  // creates a function that checks if a number is > 10
console.log(greaterThan10(11));       // → true (11 > 10)


// 2. Function that modifies another function
function noisy(f) {
  return (...args) => {                     // returns a new function
    console.log("calling with", args);     // logs arguments before calling
    let result = f(...args);               // calls the original function with args
    console.log("called with", args, ", returned", result); // logs result after call
    return result;                          // returns the result
  };
}

noisy(Math.min)(3, 2, 1);  
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1
// Here, Math.min is wrapped to log before and after execution


// 3. Custom control flow using higher-order functions
function unless(test, then) {
  if (!test) then();         // if test is false, run the 'then' function
}

repeat(3, n => {
  unless(n % 2 == 1, () => {              // if n is not odd (i.e., even)
    console.log(n, "is even");            // log the even number
  });
});
// → 0 is even
// → 2 is even


// 4. Built-in higher-order function: forEach
["A", "B"].forEach(l => console.log(l));  
// → A
// → B
// Runs the given function (console.log) on each array element



Heading: Script Dataset
Meaning: This section introduces a dataset called SCRIPTS used to demonstrate how higher-order functions can be applied to process real-world data. The dataset describes writing systems
 (scripts) like Latin, Arabic, or Tamil, using objects stored in an array.


 {
  name: "Coptic", // Name of the script

  ranges: [        // Array of Unicode code point ranges assigned to this script
    [994, 1008],   // First range: characters from code 994 (inclusive) to 1008 (exclusive)
    [11392, 11508],// Second range
    [11513, 11520] // Third range
  ],

  direction: "ltr", // Writing direction: "ltr" means left to right

  year: -200,       // Approximate year the script originated (negative means 200 BCE)

  living: false,    // Indicates whether the script is still in use (false = historic)

  link: "https://en.wikipedia.org/wiki/Coptic_alphabet" 
  // A link to more information about this script
}



Heading: Filtering arrays
This means using a function to go through each element in an array and keep only those that meet a condition. For
example, finding only the "living" scripts from the SCRIPTS dataset. 

function filter(array, test) {
  let passed = [];                  // Create a new empty array to store items that pass the test
  for (let element of array) {     // Loop through each item in the input array
    if (test(element)) {           // Apply the test function to each element
      passed.push(element);        // If test returns true, add the element to the passed array
    }
  }
  return passed;                   // Return the final array containing only elements that passed
}

console.log(filter(SCRIPTS, script => script.living));
// Call filter on SCRIPTS array to get only the scripts where 'living' is true
// Output will be an array of script objects that are still in use (living scripts)

console.log(SCRIPTS.filter(s => s.direction == "ttb"));
// Use the built-in .filter method instead of our custom one
// This filters the SCRIPTS array for scripts written top-to-bottom (direction = "ttb")
// Output: scripts like "Mongolian" that are written vertically


Heading: Transforming with map
The .map() method is used to create a new array by transforming each element in the 
original array using a function. It does not modify the original array.


function map(array, transform) {
  let mapped = [];                      // Create an empty array to store transformed values
  for (let element of array) {          // Loop through each element in the input array
    mapped.push(transform(element));    // Apply the transform function and add the result to 'mapped'
  }
  return mapped;                        // Return the new array of transformed values
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
// Use .filter() to get all scripts with 'right-to-left' writing direction
// This returns an array of script objects like Arabic, Hebrew, etc.

console.log(map(rtlScripts, s => s.name));
// Use our custom map() to extract only the 'name' property from each script
// Output: an array of names of right-to-left scripts like ["Adlam", "Arabic", "Hebrew", ...]

console.log(SCRIPTS.map(s => s.name));
// This is how we normally use the built-in .map() method
// It also returns an array of all script names from the SCRIPTS dataset


map() transforms data. Instead of getting full objects, you can get just names, years, 
directions, etc., by writing the right transform function.



Heading: Summarizing with reduce
The .reduce() method is used to "boil down" an array into a single value — like a total sum, max/min value, or even a more complex structure — by applying a function 
that combines elements step-by-step.


function reduce(array, combine, start) {
  let current = start;                       // Set the initial value for accumulation
  for (let element of array) {               // Loop through each element in the array
    current = combine(current, element);     // Apply the combine function to accumulate result
  }
  return current;                            // Return the final accumulated result
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10
// Adds all numbers in the array using reduce: 1+2+3+4 = 10

console.log([1, 2, 3, 4].reduce((a, b) => a + b));
// → 10
// Same as above, but uses the first array element (1) as the initial value (no start passed)

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);              // Sum of all character counts from the Unicode ranges
  }, 0);                                     // Start from count = 0
}

console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));
// → {name: "Han", …}
// Finds the script with the most characters using reduce
// Compares two scripts at a time and keeps the one with the higher character count




Heading: Composability

Meaning:
Composability means combining small, reusable functions (like filter, map, reduce) to build complex operations in a 
readable and structured way, like stacking blocks.


let biggest = null;
for (let script of SCRIPTS) {
  if (biggest == null ||                    // If no script stored yet...
      characterCount(biggest) < characterCount(script)) {
    biggest = script;                       // Update biggest if current one has more characters
  }
}
console.log(biggest);
// → {name: "Han", …}
// Finds the script with the most characters without using higher-order functions



function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
  // Adds all array values, then divides by number of items
}

console.log(Math.round(average(
  SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1165
// Filters only living scripts, extracts their years, averages them, and rounds the result

console.log(Math.round(average(
  SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 204
// Same as above, but for dead scripts





let total = 0, count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;                  // Add script's year to total
    count += 1;                            // Count how many living scripts
  }
}
console.log(Math.round(total / count));
// → 1165
// Same calculation using manual looping, not map/filter





STRINGS AND CHARACTER CODES

// This function determines which script a character belongs to based on its Unicode code point.
function characterScript(code) {
  for (let script of SCRIPTS) {                     // Loop through all script objects in SCRIPTS array
    if (script.ranges.some(([from, to]) => {        // Check if the given code is within any of the ranges
      return code >= from && code < to;             // Range is inclusive at 'from', exclusive at 'to'
    })) {
      return script;                                // Return the matching script object
    }
  }
  return null;                                       // If no matching script is found, return null
}

// Test: Check which script the Unicode code 121 belongs to
console.log(characterScript(121));                   // → {name: "Latin", ...}


🔍 Notes on .some() method:
Array.prototype.some() is a higher-order method.
It returns true if any element in the array passes the test function.
In this case, it checks if any [from, to] range includes the given code.


let horseShoe = "🐴👟";                // Contains two emoji characters: horse and shoe

console.log(horseShoe.length);        // → 4 (Because each emoji uses 2 UTF-16 code units)

console.log(horseShoe[0]);            // → Invalid half-character (only the first code unit)

console.log(horseShoe.charCodeAt(0)); // → 55357 (UTF-16 first code unit, not full character)

console.log(horseShoe.codePointAt(0));// → 128052 (Full Unicode code point for 🐴)




🧠 Important Concepts:
JavaScript uses UTF-16 encoding, where common characters use 1 code unit, but emoji/rare characters use 2 units.
charCodeAt() returns only one code unit (incomplete for some characters).
codePointAt() gives the full Unicode value for characters, including emojis.


let roseDragon = "🌹🐉";              // String with two emoji characters

for (let char of roseDragon) {        // for...of handles full characters, not just code units
  console.log(char);                  // → 🌹
                                      // → 🐉
}



let emoji = "🐉";
console.log(emoji.codePointAt(0));    // → 128009 (Correct Unicode value of dragon emoji)




✅ Heading: Recognizing text
This section explains how to analyze a piece of text and recognize what writing scripts 
(like Latin, Han, or Cyrillic) are used in it using JavaScript. It builds upon previous functions like characterScript, 
codePointAt(), and introduces a new utility: countBy.


function countBy(items, groupName) {
  let counts = [];  // Create an empty array to store script counts

  for (let item of items) {  // Loop through each item (e.g., character)
    let name = groupName(item);  // Call the grouping function to get the group name (like script name)

    let known = counts.find(c => c.name == name);  // Check if this script/group name already exists in 'counts'

    if (!known) {
      counts.push({ name, count: 1 });  // If not found, add a new entry with count 1
    } else {
      known.count++;  // If found, just increment the count
    }
  }

  return counts;  // Return the final array with counts of each group
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// Output: [{name: false, count: 2}, {name: true, count: 3}]







function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));  // Find the script object using codePointAt
    return script ? script.name : "none";  // If script is found, return its name, else return "none"
  }).filter(({ name }) => name != "none");  // Remove entries where script name is "none"

  let total = scripts.reduce((n, { count }) => n + count, 0);  // Sum all counts to get total script characters

  if (total == 0) return "No scripts found";  // If no script characters found, return a message

  return scripts.map(({ name, count }) => {
    return `${Math.round(count * 100 / total)}% ${name}`;  // Calculate percentage and format as string
  }).join(", ");  // Combine all script info strings into one, separated by commas
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说 "тяв"'));
// Output: "61% Han, 22% Latin, 17% Cyrillic"



// YOU CAN SEE THIS CODE IN JS BOOK FOR BETTER UNDERSTIND I WROTE IT CLEARLY




