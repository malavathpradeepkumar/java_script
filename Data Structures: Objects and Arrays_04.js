// Data Structures: Objects and Arrays

/* Numbers, Booleans, and strings are basic data types, but to handle more complex information, we use objects that 
group multiple values together.

// THE WERESQUIRREL

Jacques transforms into a squirrel sometimes at night. He wants to find out what triggers these transformations by keeping a daily log of his activities 
and whether he changed form.

Key idea:
To analyze when transformations happen, Jacques needs a way to store his daily data — a data structure that holds what he did and if 
he transformed.

// DATASETS

To store multiple related values, we use arrays—special data structures that hold sequences of values. Unlike strings, arrays 
let us easily access each item by its position.


// Create an array holding several numbers
let listOfNumbers = [2, 3, 5, 7, 11];

// Access the element at index 2 (third element, zero-based)
console.log(listOfNumbers[2]); // → 5

// Access the first element (index 0)
console.log(listOfNumbers[0]); // → 2

// Access element at index 1 (2 - 1 = 1)
console.log(listOfNumbers[2 - 1]); // → 3



Key point:

Array indices start at 0, so listOfNumbers[0] is the first element.

Square brackets after the array name let you access specific elements by their index.


// PROPERTIES

Properties hold extra information or functions attached to values. You access them with a dot (.) or square brackets ([]). Dot uses a 
fixed property name, while brackets use a variable or any string. Arrays store elements as properties with number keys and also have a 
length property.


// Access property with dot notation (fixed property name)
console.log("hello".length);   // → 5

// Access property with bracket notation (property name from variable)
let propName = "max";
console.log(Math[propName]);    // → function Math.max

// Dot notation requires valid identifier names:
let obj = { color: "red", "John Doe": 42 };

// Accessing 'color' property
console.log(obj.color);         // → "red"

// Accessing 'John Doe' property (invalid as dot notation)
console.log(obj["John Doe"]);   // → 42

// Array elements are properties with numeric names
let arr = [10, 20, 30];
console.log(arr[1]);            // → 20 (index 1)

// Array length property tells how many elements it contains
console.log(arr.length);        // → 3



Summary:

Use dot notation for fixed, simple property names.
Use brackets for dynamic or complex property names (including numbers and spaces).
Arrays are objects with numeric keys for elements and a length property.

// METHODS

Strings and arrays have built-in methods (functions stored in properties).

toUpperCase() turns a string to uppercase.

Arrays have push() to add, and pop() to remove the last item — these are stack operations (Last In, First Out).



let doh = "Doh";

// typeof tells us toUpperCase is a function (a method of string)
console.log(typeof doh.toUpperCase); // → "function"

// Calling the method returns the string in uppercase
console.log(doh.toUpperCase()); // → "DOH"

// --- Array methods ---
let sequence = [1, 2, 3];

// push() adds items to the end
sequence.push(4);   // [1, 2, 3, 4]
sequence.push(5);   // [1, 2, 3, 4, 5]
console.log(sequence); // → [1, 2, 3, 4, 5]

// pop() removes the last item and returns it
console.log(sequence.pop()); // → 5

// After pop, the array is shorter
console.log(sequence); // → [1, 2, 3, 4]


// OBJECTS


✅ Paragraph Summary (Weresquirrel + Objects):
Jacques logs daily activities and whether he became a squirrel.

Each log entry = an object with two properties:
events (an array of strings) and squirrel (a boolean).

All entries are stored in an array = journal.

JavaScript objects = flexible structures for grouping values under named properties.

You can add, read, delete, and list properties of objects.

Arrays are actually special objects with numeric property names.


// Creating an object with properties
let day1 = {
  squirrel: false, // did not turn into squirrel
  events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);  // → false
console.log(day1.wolf);      // → undefined (no such property)

// Adding a new property dynamically
day1.wolf = false;
console.log(day1.wolf);      // → false

// Property names with spaces must be in quotes
let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};

// Delete a property
let anObject = { left: 1, right: 2 };
delete anObject.left;
console.log(anObject.left);      // → undefined
console.log("left" in anObject); // → false
console.log("right" in anObject); // → true

// List all property names
console.log(Object.keys({ x: 0, y: 1, z: 2 }));
// → ["x", "y", "z"]

// Merge properties from one object into another
let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA); // → { a: 1, b: 3, c: 4 }

// Array of daily logs (journal entries)
let journal = [
  {
    events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false
  },
  {
    events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
    squirrel: false
  },
  {
    events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true
  }
  // ...more entries
];


🧠 Quick Notes:
Object = { key: value }

Access with obj.key or obj["key"]

delete obj.key removes a property

Object.keys(obj) returns array of property names

Object.assign(target, source) merges two objects

[] is also an object (just uses numbers as keys)


// MUTABILITY

(Mutable vs Immutable):
Primitive types (like numbers, strings, booleans) are immutable — their values can’t change.

Objects are mutable — you can change their properties.

Two objects with the same properties are not equal unless they refer to the same memory.

const only locks the binding, not the object contents.


// Create an object and two variables referencing it
let object1 = { value: 10 };
let object2 = object1; // same reference as object1
let object3 = { value: 10 }; // new object, same content

console.log(object1 == object2); // true (same object)
console.log(object1 == object3); // false (different objects)

// Modify object1, object2 sees the change (same reference)
object1.value = 15;
console.log(object2.value); // → 15
console.log(object3.value); // → 10

// const locks the variable, not the object itself
const score = { visitors: 0, home: 0 };

// Allowed: modifying a property
score.visitors = 1;

// Not allowed: reassigning the whole object
// score = { visitors: 1, home: 1 }; // ❌ Error!


🧠 Quick Notes:
Primitives (number, string, boolean) = 🔒 cannot be changed

Objects = 🧠 mutable, properties can change anytime

== checks if two objects are the same reference, not same content

const obj → you can't reassign obj, but obj.property can still change.



// THE LYCANTHROPE'S LOG

Instead of writing {events: events}, he uses {events} as a shortcut. This works because JavaScript understands that if the key and value name
 are the same, you can just write the key once.

 let journal = [];  
// Create an empty array called 'journal' to store daily records

function addEntry(events, squirrel) {
  // Define a function 'addEntry' that takes two parameters:
  // 'events' is a list of things Jacques did that day
  // 'squirrel' is a boolean (true/false) indicating if he turned into a squirrel
  journal.push({events, squirrel});
  // Add a new object to the 'journal' array using shorthand:
  // {events, squirrel} is same as {events: events, squirrel: squirrel}
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
// Add a record where Jacques did 5 activities and did NOT turn into a squirrel

addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
// Another day with 6 activities and no transformation

addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
// A day with 5 events, and this time he DID turn into a squirrel


function phi(table) {
  // This function calculates the phi coefficient (φ) for a 2x2 frequency table

  return (table[3] * table[0] - table[2] * table[1]) /
    // Numerator: (n11 * n00) - (n10 * n01)

    Math.sqrt(
      (table[2] + table[3]) *  // n1• (total true squirrel)
      (table[0] + table[1]) *  // n0• (total false squirrel)
      (table[1] + table[3]) *  // n•1 (total event true)
      (table[0] + table[2])    // n•0 (total event false)
    );
    // Denominator: square root of the product of all marginal totals
}

console.log(phi([76, 9, 4, 1]));
// → 0.068599434  (Low correlation: "pizza" not strongly linked to transformation)



function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  // Create a new table to store counts for all 4 combinations

  for (let i = 0; i < journal.length; i++) {
    // Loop through each journal entry

    let entry = journal[i], index = 0;
    // Get the current journal entry, start index at 0 (binary 00)

    if (entry.events.includes(event)) index += 1;
    // If the event occurred, add 1 (event true → right bit is 1)

    if (entry.squirrel) index += 2;
    // If Jacques turned into a squirrel, add 2 (squirrel true → left bit is 1)

    table[index] += 1;
    // Increment the count for the matching case (00, 01, 10, or 11)
  }

  return table;
  // Return the final table
}

console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]  (The table for "pizza" event: how often it happened vs transformation)


🔷 Array Loops in JavaScript

for (let i = 0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  // do something
}

This is a classical array loop. It uses a counter (i) to go through each index of the array (JOURNAL), one by one.

for (let entry of JOURNAL) {
  // do something
}


THIS IS THE MODERN WAY This uses **for...of**, which directly gives you the values inside the array (not their index). It works not 
only for arrays but  also for strings and other iterable structures.

for (let i = 0; i < JOURNAL.length; i++) {
  // 'let i' declares a binding (a variable named 'i') used as a counter
  // JOURNAL.length gives the number of entries in the JOURNAL array
  // The loop runs from 0 up to, but not including, JOURNAL.length

  let entry = JOURNAL[i];
  // 'entry' is a new binding
  // JOURNAL[i] accesses the element at index i of the JOURNAL array
  // Each element is an object containing {events, squirrel}
  
  // You can now do something with the current 'entry'
}



for (let entry of JOURNAL) {
  // 'entry' is a new binding that will directly store each element of the JOURNAL array (no index needed)
  // 'of' is used to loop over elements in arrays, strings, and other iterable objects
  // This is shorter and cleaner than using a counter

  console.log(`${entry.events.length} events.`);
  // Template string: `${...}` allows us to insert values inside a string
  // 'entry.events' accesses the 'events' property (an array) inside the current journal entry
  // '.length' gets the number of events that day
  // Example output: "5 events."
}


🧩 The Final Analysis: Finding Correlated Events in the Journal

To find out what events are linked to Jacques turning into a squirrel, we:
Collect all event types that occurred in the journal.
For each event, we:
Build a frequency table using tableFor()
Compute its correlation using phi()


function journalEvents(journal) {
  // 'journalEvents' is a function that takes one parameter: 'journal' (an array of journal entries)

  let events = [];
  // 'events' is a new binding; it holds an array of unique event names

  for (let entry of journal) {
    // Loop through each 'entry' (object) in the 'journal' array

    for (let event of entry.events) {
      // Loop through each 'event' (string) in the 'events' array inside the current journal entry

      if (!events.includes(event)) {
        // Check if 'event' is NOT already in 'events' array

        events.push(event);
        // Add the event to the 'events' array (collect unique event names)
      }
    }
  }

  return events;
  // Return the list of all unique event names
}

console.log(journalEvents(JOURNAL));
// Example Output → ["carrot", "exercise", "weekend", "bread", ...]


END

for (let event of journalEvents(JOURNAL)) {
  // Loop through each unique 'event' collected from the journal

  console.log(event + ":", phi(tableFor(event, JOURNAL)));
  // Print the event name and its correlation value
  // 'phi()' takes a frequency table (from 'tableFor') and returns the correlation
}


END

for (let event of journalEvents(JOURNAL)) {
  // Loop through each event again

  let correlation = phi(tableFor(event, JOURNAL));
  // 'correlation' is a new binding that stores the result of phi for the current event

  if (correlation > 0.1 || correlation < -0.1) {
    // Only continue if the correlation is stronger than +0.1 or weaker than -0.1

    console.log(event + ":", correlation);
    // Print the event and its strong correlation
  }
}

// Output example:
// → weekend: 0.1371988681
// → brushed teeth: -0.3805211953
// → peanuts: 0.5902679812


END

for (let entry of JOURNAL) {
  // Loop through each journal entry

  if (
    entry.events.includes("peanuts") &&
    // Check if this entry includes the event "peanuts"

    !entry.events.includes("brushed teeth")
    // Also check if this entry does NOT include "brushed teeth"
  ) {
    entry.events.push("peanut teeth");
    // Add a new event called "peanut teeth" to this journal entry
    // This event represents the combination condition
  }
}


console.log(phi(tableFor("peanut teeth", JOURNAL)));
// Output: 1 (perfect correlation)

END


📚 Further Arrayology — Useful Array Methods

🔷 📌 Task Queue – Using push, shift, and unshift


// Declare a binding 'todoList' as an empty array — this will store tasks
let todoList = [];  // ➤ array []

// Define a function 'remember' to add a task at the end of the list
function remember(task) {
  // 'task' is a parameter (a placeholder for the task name)
  todoList.push(task);  // ➤ .push() method adds the task to the end of the array
}

// Define a function 'getTask' to get and remove the first task from the list
function getTask() {
  return todoList.shift();  // ➤ .shift() method removes and returns the first task (front of the array)
}

// Define a function 'rememberUrgently' to add a task at the beginning
function rememberUrgently(task) {
  todoList.unshift(task);  // ➤ .unshift() method adds task to the front (index 0)
}

🔷 📌 Searching in Arrays – indexOf and lastIndexOf

// Use .indexOf() to find the first position of a value in the array
console.log([1, 2, 3, 2, 1].indexOf(2));
// ➤ Output: 1 (first time number 2 appears is at index 1)

// Use .lastIndexOf() to find the last position of a value in the array
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// ➤ Output: 3 (last time number 2 appears is at index 3)


🔷 📌 Copying Parts of Array – slice()

// .slice(start, end) copies a section of the array without changing the original
console.log([0, 1, 2, 3, 4].slice(2, 4));
// ➤ Output: [2, 3] → starts from index 2, goes up to (but not including) index 4

// If end is not given, it copies from start to end of array
console.log([0, 1, 2, 3, 4].slice(2));
// ➤ Output: [2, 3, 4]


🔷 📌 Joining Arrays – concat() with slice() to remove an element

// Define a function to remove one element from the array at a specific index
function remove(array, index) {
  // 'slice(0, index)' gives elements before the index
  // 'slice(index + 1)' gives elements after the index
  // 'concat()' joins both into a new array (skipping the item at 'index')
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));
// ➤ Output: ["a", "b", "d", "e"] → removes "c" at index 2

🔷 📌 concat() with a single value

// .concat() works with non-array values too — it treats them like a one-element array
console.log(["x", "y"].concat("z"));
// ➤ Output: ["x", "y", "z"]



🔷 📌 Strings and Their Properties in JavaScript

// Create a string binding (primitive type — not an object)
let kim = "Kim";  // ➤ 'kim' is a binding with a string value

// Try to add a custom property to a string (this won't work)
kim.age = 88;     // ➤ 'age' looks like a property, but strings are not objects

// Try to access that property (it will not be saved)
console.log(kim.age);  // ➤ Output: undefined
// ➤ String, number, and boolean are primitive types → they are immutable (cannot be changed)
// ➤ You can read built-in properties, but cannot add new ones


🔷 📌 Built-in String Methods – indexOf()

// .indexOf() is a string method that returns the index of the first occurrence of a substring

console.log("coconut".indexOf("u"));  
// ➤ Searches for "u" in the string "coconut"
// ➤ Output: 5 (the first "u" appears at index 5)

console.log("one two three".indexOf("ee"));  
// ➤ Searches for substring "ee" in "one two three"
// ➤ Output: 11 (starts at index 11)

🔷 📌 trim() – Removing whitespace from start and end

// .trim() removes spaces, tabs, newlines from the start and end of a string

console.log("  okay \n ".trim());  
// ➤ Output: "okay" (spaces and newline removed)


🔷 📌 padStart() – Add padding characters in front

// .padStart(totalLength, padCharacter) makes the string that length by padding at the start

console.log(String(6).padStart(3, "0"));  
// ➤ Convert number 6 to string first: "6"
// ➤ Add "0" until the string is length 3 → becomes "006"

🔷 📌 repeat() – Repeat the string multiple times
// .repeat(count) creates a new string by repeating the original string

console.log("LA".repeat(3));  
// ➤ Output: "LALALA" (repeats "LA" 3 times)


🔷 📌 length property and accessing characters

let string = "abc";  // ➤ A string with 3 characters

console.log(string.length);  
// ➤ .length is a property that gives the number of characters in the string → Output: 3

console.log(string[1]);  
// ➤ Access the character at index 1 → Output: "b"
// ➤ Just like accessing elements in an array (index starts from 0)

🔷 📌 split() and join() – Convert string to array and back

let sentence = "Secretarybirds specialize in stomping";  
// ➤ A string sentence

let words = sentence.split(" ");  
// ➤ .split(" ") splits the string into an array at every space
// ➤ Output: ["Secretarybirds", "specialize", "in", "stomping"]

console.log(words);  
// ➤ Print the resulting array of words

console.log(words.join(". "));  
// ➤ .join(". ") joins the array into a string using ". " between each word
// ➤ Output: "Secretarybirds. specialize. in. stomping"



🔷 📌 Rest Parameters – Accepting Any Number of Arguments

// Define a function named 'max' that can take any number of arguments
function max(...numbers) {
  // '...numbers' is called a REST PARAMETER
  // It collects all arguments into a single array named 'numbers'

  let result = -Infinity;
  // Start with the smallest possible number so anything passed in will be bigger

  for (let number of numbers) {
    // Loop through each value in the 'numbers' array
    if (number > result) result = number;
    // Update 'result' if current number is larger
  }

  return result;  // Return the largest number found
}

console.log(max(4, 1, 9, -2));
// ➤ Output: 9
// ➤ The function was called with 4 arguments, and they were collected into an array


🔷 📌 Spread Syntax – Spreading Arrays into Arguments

let numbers = [5, 1, 7];  // ➤ A normal array

console.log(max(...numbers));
// ➤ The '...' before 'numbers' is called the SPREAD OPERATOR
// ➤ It spreads the array values as separate arguments into the function call
// ➤ So this is like calling max(5, 1, 7)
// ➤ Output: 7


🔷 📌 Spread + Extra Arguments

console.log(max(9, ...numbers, 2));
// ➤ You can combine individual values with a spread array
// ➤ This call becomes: max(9, 5, 1, 7, 2)
// ➤ Output: 9


🔷 📌 Spread in Array Literals – Merging Arrays

let words = ["never", "fully"];  // ➤ A simple array of words

console.log(["will", ...words, "understand"]);
// ➤ Using '...' inside array brackets spreads the array elements into the new array
// ➤ Output: ["will", "never", "fully", "understand"]


🔷 📌 Spread in Objects – Merging Properties

let coordinates = {x: 10, y: 0};  // ➤ An object with 2 properties

console.log({...coordinates, y: 5, z: 1});
// ➤ Using '...' in an object copies all key-value pairs from another object
// ➤ If keys are duplicated, the last one wins (y becomes 5, not 0)
// ➤ Output: {x: 10, y: 5, z: 1}


🔷 📌 Using Math Object for Trigonometry and Random Point Calculation

// Define a function to get a random point on a circle with given radius
function randomPointOnCircle(radius) {
  // Math.random() gives a random number between 0 (inclusive) and 1 (exclusive)
  // Multiply by 2 * Math.PI to get a full angle in radians (0 to 2π)
  let angle = Math.random() * 2 * Math.PI;

  // Use Math.cos(angle) and Math.sin(angle) to get the x and y coordinates on the circle
  return {
    x: radius * Math.cos(angle),  // ➤ x = r × cos(angle)
    y: radius * Math.sin(angle)   // ➤ y = r × sin(angle)
  };
}

console.log(randomPointOnCircle(2));
// ➤ Output: {x: ..., y: ...} → random point on circle of radius 2

🔷 📌 Math.random() – Pseudo-Random Number Generator

console.log(Math.random());
// ➤ Output: A random decimal between 0 (inclusive) and 1 (exclusive)

console.log(Math.random());
// ➤ Output: Another random decimal

console.log(Math.random());
// ➤ Output: Another different random decimal

🔷 📌 Getting a Whole Random Number Between 0 and 9

// Multiply Math.random() by 10 → range becomes 0 to <10
// Apply Math.floor() to round down to whole number

console.log(Math.floor(Math.random() * 10));
// ➤ Output: Whole number from 0 to 9 (inclusive)

🔷 📌 Other Useful Math Functions

console.log(Math.ceil(4.2));   
// ➤ .ceil() rounds UP to nearest integer → Output: 5

console.log(Math.floor(4.8));  
// ➤ .floor() rounds DOWN to nearest integer → Output: 4

console.log(Math.round(4.5));  
// ➤ .round() rounds to NEAREST integer → Output: 5

console.log(Math.abs(-7));     
// ➤ .abs() returns ABSOLUTE VALUE (removes negative sign) → Output: 7


🔷 Heading: Destructuring
Meaning:
This section explains destructuring, a powerful syntax in JavaScript that lets you extract values from arrays or objects and 
assign them directly to variables in a single line. 

🔷 📌 Destructuring Arrays – Clean Way to Extract Elements

// Old way: access values one by one using indices (not clean or readable)
// New way: destructuring — directly assign values from array to variables using []

// Define a function 'phi' that takes a 4-element array as input
// Use destructuring in the parameter to assign each element to a named variable
function phi([n00, n01, n10, n11]) {
  // Now we can use the named variables directly, instead of writing table[0], table[1], etc.
  return (n11 * n00 - n10 * n01) /
         Math.sqrt((n10 + n11) * (n00 + n01) *
                   (n01 + n11) * (n00 + n10));
}

// ➤ 'n00', 'n01', 'n10', 'n11' are now variables bound to the array values
// ➤ This makes the formula easier to read and maintain


🔷 📌 Destructuring Objects – Extract Properties Easily

// Use destructuring to extract a property from an object into a variable

let {name} = {name: "Faraji", age: 23};
// ➤ The object has two properties: 'name' and 'age'
// ➤ {name} means: create a variable called 'name' and assign it the value from the object's 'name' property

console.log(name);
// ➤ Output: Faraji

⚠️ Important Note (Error Case)
❌ You cannot destructure null or undefined

❌ Trying to do so will give a runtime error

✅ Only destructure from actual arrays or objects


🔷 Heading: Optional property access
Meaning:
This section introduces optional chaining (?.) — a safe way to access properties or call functions on an object that might be null or undefined. Instead of throwing 
an error, it returns undefined if the object doesn't exist.

🔷 📌 Using Optional Chaining with Dot Notation

// Define a function named 'city' that receives an object as input
function city(object) {
  // Use optional chaining to safely access nested property: address → city
  // If object.address is undefined or null, the whole expression returns undefined
  return object.address?.city;
}

console.log(city({address: {city: "Toronto"}}));
// ➤ Output: "Toronto"
// ➤ address exists, and it has a city property

console.log(city({name: "Vera"}));
// ➤ Output: undefined
// ➤ address is missing, so object.address is undefined
// ➤ But no error is thrown because of optional chaining

🔷 📌 Optional Chaining with Function Calls and Array Access


// Try to call a method that doesn't exist using optional chaining
console.log("string".notAMethod?.());
// ➤ Output: undefined
// ➤ 'notAMethod' is undefined, so ?.() skips the call and returns undefined instead of throwing an error

// Try to access the first element of a missing array property
console.log({}.arrayProp?.[0]);
// ➤ Output: undefined
// ➤ 'arrayProp' doesn't exist, so the access fails safely

🔷 📌 JSON.stringify() and JSON.parse() – Convert Data to/from JSON

// Define a JavaScript object
let string = JSON.stringify({
  squirrel: false,                // ➤ Boolean property
  events: ["weekend"]             // ➤ Array property
});

// ➤ JSON.stringify() converts a JavaScript object into a JSON string
console.log(string);
// ➤ Output: '{"squirrel":false,"events":["weekend"]}'
// ➤ This is a plain string that looks like JavaScript object syntax but follows JSON rules:
//    - Property names are in double quotes
//    - No functions or comments allowed

// ➤ JSON.parse() takes a JSON string and converts it back to a real JavaScript object
console.log(JSON.parse(string).events);
// ➤ Output: ["weekend"]
// ➤ We parse the JSON string back into an object, then access the 'events' property


⚠️ Rules & Facts About JSON
✅ JSON is used for saving and sending data (e.g., over the internet).
✅ It looks like JavaScript but is more strict.
❌ Property names must be in double quotes.
❌ No functions, variables, or comments allowed inside JSON.
✅ Only simple values are allowed: strings, numbers, booleans, arrays, and objects.