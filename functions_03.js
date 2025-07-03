// FUNCTIONS

/* If there is no return, the result is undefined — Functions with no return return undefined by default.

const square = function(x) {
  // Defines a function and stores it in the variable 'square'
  // It takes one parameter 'x' and returns x multiplied by itself
  return x * x;
};

console.log(square(12));
// Calls the 'square' function with 12 as input
// Logs the result: 144
// → 144



const makeNoise = function() {
  // Defines a function with no parameters
  // It prints "Pling!" to the console
  console.log("Pling!");
};

makeNoise();
// Calls the makeNoise function
// → Pling!



const roundTo = function(n, step) {
  // Defines a function with two parameters: 'n' and 'step'
  // It calculates how far 'n' is from the nearest multiple of 'step'
  let remainder = n % step;
  // Returns 'n' rounded to the nearest multiple of 'step'
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(23, 10));
// Calls roundTo with 23 and 10
// Logs: 20
// → 20


// BINDINGS AND SCOPES

Each binding has a scope — Scope means the area of the code where a variable (binding) can be accessed.

🔹 Global scope — Variables declared outside any function or block are global. They can be used anywhere in the program.

🔹 Local scope — Variables declared inside functions or as function parameters are local. They exist only during the function call.

🔹 Function calls create new local bindings each time — Every time a function runs, it creates a fresh set of its local variables.

🔹 let and const create block-scoped bindings — If used in a loop or if block, those variables exist only inside that block.

🔹 var is function-scoped or global-scoped — Unlike let and const, var does not respect block scope and can "leak" out.

🔹 Scopes are nested — Inner code can see variables from outer scopes unless there’s a name conflict.

🔹 If a variable name is reused in an inner scope, it hides the outer one inside that block or function.



let x = 10;
// 'x' is declared in the global scope — accessible anywhere

if (true) {
  let y = 20; 
  // 'y' is block-scoped — only accessible inside this 'if' block

  var z = 30; 
  // 'z' is function-scoped or global-scoped — accessible outside the block
}



const halve = function(n) {
  // This function defines a local variable 'n' (its parameter)
  // When called, it returns half of the input value
  return n / 2;
};

let n = 10;
// This 'n' is a separate variable in the global scope

console.log(halve(100));
// Calls the halve function with 100
// Inside the function, 'n' refers to 100
// Logs: 50
// → 50

console.log(n);
// Logs the global 'n', which is still 10
// The local 'n' inside halve() did not affect this
// → 10



// Nested scope

🔹 JavaScript has multiple levels of locality — Functions or blocks can be nested inside each other, creating scopes within scopes.

🔹 A function inside another function — This means the inner function can use variables from the outer one.

🔹 Example: The hummus function contains another function ingredient — ingredient can access factor, which is defined in hummus.

🔹 Variables like unit and ingredientAmount are local to ingredient — These are not visible outside of the ingredient function.

🔹 Visibility is based on the position in the code — This is known as lexical scoping, where inner code can access outer variables, but not the other way around.



const hummus = function(factor) {
  // 'hummus' is a function that takes one parameter: 'factor'

  const ingredient = function(amount, unit, name) {
    // 'ingredient' is a nested function inside 'hummus'
    // It can access 'factor' from the outer scope

    let ingredientAmount = amount * factor;
    // Multiplies the base amount by the factor to scale the recipe

    if (ingredientAmount > 1) {
      unit += "s";
      // Adds 's' to unit if amount is more than 1 (pluralize the unit)
    }

    console.log(`${ingredientAmount} ${unit} ${name}`);
    // Logs the full ingredient line (e.g. "0.5 teaspoons cumin")
  };

  // Calls to the nested function with different ingredients:
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};


// Functions as values

🔹 Function bindings usually act as names for functions — When you define a function, you're assigning it to a variable name.

🔹 Function name and function value are different — The name (like launchMissiles) is just a reference to the function's actual code (the value).

🔹 Functions are values — You can pass them around, store them in variables, or assign them to other variables — just like numbers or strings.

🔹 Function bindings can be reassigned — If a function is stored in a let (not const), it can be replaced with a different value later.

🔹 Example: disabling a function in safe mode — You can overwrite a function to do nothing if a condition is met.

let launchMissiles = function() {
  // This function calls the missile system to launch immediately
  missileSystem.launch("now");
};

if (safeMode) {
  launchMissiles = function() {
    // In safe mode, we override the original function
    // This version does nothing (disables missile launching)
  };
}



// DECLARATION NOTATION

🔹 Function declaration is a shorter way to define functions — You use function at the start of the line without assigning it to a variable.

🔹 No semicolon is needed — Unlike function expressions, declarations don’t need ; at the end.

🔹 Function declarations are "hoisted" — This means they are moved to the top of their scope during execution.

🔹 You can use the function before it's written in the code — Thanks to hoisting, a function can be called even if it’s defined later in the code.

🔹 This gives flexibility in how you organize your code — You don’t have to define all functions first; they can come after the code that uses them.


function square(x) {
  // This is a function declaration
  // It takes one parameter 'x' and returns x squared
  return x * x;
}



console.log("The future says:", future());
// Even though the function is defined later, this works due to hoisting

function future() {
  // This function returns a prediction string
  return "You'll never have flying cars";
}




// Declaration notation


 Arrow functions are a third way to write functions — Instead of function keyword, they use => (arrow).

🔹 Syntax: parameters followed by => and then the function body — It reads like “inputs produce outputs.”

🔹 If only one parameter, parentheses can be omitted — So x => x * x is valid.

🔹 If the body is a single expression, it’s implicitly returned — No need for return or braces {}.

🔹 For no parameters, use empty parentheses () — Like () => { ... }.

🔹 Arrow functions mostly serve to write shorter, cleaner code — They behave similarly to regular function expressions with minor 
differences (to be discussed later).


const roundTo = (n, step) => {
  // Arrow function with two parameters: n, step
  // Calculates remainder and rounds 'n' to nearest multiple of 'step'
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};



const square1 = (x) => { 
  // Arrow function with one parameter and block body
  // Explicitly returns x squared
  return x * x; 
};


const square2 = x => 
  // Arrow function with one parameter and implicit return
  // Returns x squared without 'return' or braces
  x * x;



  const horn = () => {
  // Arrow function with no parameters
  // Prints "Toot" to the console
  console.log("Toot");
};


// THE CALL STACK

🔹 Control flow in functions involves jumping between code locations — When a function is called, execution moves into that function.

🔹 Example: greet calls console.log inside it — Control passes into console.log, then returns to greet, then back to the caller.

🔹 After a function finishes, control returns to where it was called — The computer must remember where to come back to.

🔹 This "remembering" is done using the call stack — Each function call pushes the current context onto the stack.

🔹 When a function returns, its context is popped off the stack — Execution continues from that saved point.

🔹 If the call stack gets too deep, the program crashes with “stack overflow” — Happens with infinite or very deep recursion.

🔹 Example of infinite recursion: chicken() calls egg(), which calls chicken() endlessly — This will eventually blow the stack.


function greet(who) {
  // Function greet takes a parameter 'who' and logs a greeting
  console.log("Hello " + who);
}

greet("Harry");
// Calls greet("Harry")
// Control jumps to greet, which calls console.log("Hello Harry")
// After console.log finishes, control returns to greet, then back here

console.log("Bye");
// Logs "Bye" after greet finishes



Control flow schematic:

not in function → in greet → in console.log → in greet → not in function → in console.log → not in function

function chicken() {
  // Calls egg(), causing control to jump to egg function
  return egg();
}

function egg() {
  // Calls chicken(), causing infinite mutual recursion
  return chicken();
}

console.log(chicken() + " came first.");
// This will cause infinite calls between chicken and egg
// Eventually the call stack overflows, crashing the program
// → ??



// Optional Arguments

🔹 JavaScript allows calling functions with any number of arguments — Extra arguments are ignored, missing ones become undefined.

🔹 This flexibility can cause silent errors — Passing wrong number of arguments won’t throw errors.

🔹 You can use this behavior to make optional arguments — Functions can behave differently based on how many arguments they get.

🔹 Example: minus function behaves differently if second argument is missing — Negates if only one argument, subtracts if two.

🔹 Default parameter syntax (param = value) sets default when argument is missing or undefined — Makes arguments optional.

🔹 Functions can access all passed arguments via a special mechanism (discussed later) — Useful for variable number of arguments.


function square(x) {
  // Function expects one parameter 'x'
  // Extra arguments will be ignored silently
  return x * x;
}

console.log(square(4, true, "hedgehog"));
// Calls square with 3 arguments, but only '4' is used
// → 16



function minus(a, b) {
  // If second argument 'b' is missing (undefined), return negative 'a'
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// Calls minus with one argument, returns -10
// → -10

console.log(minus(10, 5));
// Calls minus with two arguments, returns 10 - 5 = 5
// → 5


function roundTo(n, step = 1) {
  // Default value for 'step' is 1 if not provided or undefined
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
}

console.log(roundTo(4.5));
// Uses default step=1, rounds 4.5 to 5
// → 5



console.log(roundTo(4.5, 2));
// Uses step=2, rounds 4.5 to 4
// → 4



console.log("C", "O", 2);
// console.log can take any number of arguments and prints them all
// → C O 2


// CLOSURE

 Functions can remember local bindings even after the function that created them finishes.

🔹 Each call creates fresh local bindings that stay accessible through returned functions.

🔹 This feature is called a closure — a function “closes over” its surrounding local variables.

🔹 Closures allow functions to keep access to the environment in which they were created, not just where they are called.

🔹 Closures enable powerful patterns, like creating specialized functions with preset data (e.g., multiplier).

function wrapValue(n) {
  let local = n; // Local binding created anew on each call
  return () => local; // Returns a function that accesses 'local'
}

let wrap1 = wrapValue(1);
// wrap1 remembers local = 1 from this call

let wrap2 = wrapValue(2);
// wrap2 remembers local = 2 from this call

console.log(wrap1());
// → 1 (wrap1 “closes over” its own local binding)

console.log(wrap2());
// → 2 (wrap2 has separate local binding)





function multiplier(factor) {
  // Returns a function that multiplies input by 'factor'
  // 'factor' is a local binding preserved by the returned function (closure)
  return number => number * factor;
}

let twice = multiplier(2);
// 'twice' remembers factor = 2 from the call to multiplier

console.log(twice(5));
// → 10 (calls the returned function, multiplying 5 by remembered factor 2)




// RECURSION
🔥 What is Recursion?
A recursive function is a function that calls itself.

It must have a base case to stop the recursion, or else it will keep calling itself indefinitely (leading to a stack overflow).

Recursive solutions often mirror mathematical definitions or naturally branching problems.

Recursion can be elegant and easier to understand for some problems, even if it’s sometimes slower than loops.


function power(base, exponent) {
  if (exponent == 0) {
    return 1;            // Base case: anything to the power 0 is 1
  } else {
    return base * power(base, exponent - 1);  // Recursive step
  }
}

console.log(power(2, 3));  // → 8


⚠️ Efficiency Note
Recursive calls are more expensive than loops because each call adds to the call stack.

Sometimes a loop is better for performance, but recursion can be clearer.


🤔 Example Problem Using Recursion
Starting from 1, by repeatedly adding 5 or multiplying by 3, produce a target number.


function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;  // Found the target, return the history string
    } else if (current > target) {
      return null;     // Passed target, no solution in this branch
    } else {
      // Try adding 5 OR multiplying by 3, return first successful path
      return find(current + 5, `(${history} + 5)`) ?? 
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");  // Start from 1 with history "1"
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)


🧠 How It Works
find explores two branches for each number:

Add 5 to the current number.

Multiply the current number by 3.

Returns null if the path overshoots the target.

Returns the first path found that reaches the target.

Uses the ?? operator (nullish coalescing) to try the second path only if the first fails.

🌲 Call Stack Exploration for Target 13
Calls branch out trying to add 5 or multiply by 3:

find(1, "1")
 ├─ find(6, "(1 + 5)")
 │    ├─ find(11, "((1 + 5) + 5)")
 │    │    ├─ find(16, "(((1 + 5) + 5) + 5)") // too big → null
 │    │    └─ find(33, "(((1 + 5) + 5) * 3)") // too big → null
 │    └─ find(18, "((1 + 5) * 3)")             // too big → null
 └─ find(3, "(1 * 3)")
      ├─ find(8, "((1 * 3) + 5)")
      └─ find(13, "(((1 * 3) + 5) + 5)")       // found solution!



✅ Key Takeaways
Recursion naturally breaks down complex problems by exploring branches.

Every recursive call adds a new context on the call stack.

Base cases prevent infinite recursion.

Recursive code often closely models the problem definition.

Sometimes recursion can be less efficient than looping but clearer for certain tasks.


// GROWING FUNCTIONS

Two Natural Ways to Introduce Functions
Refactoring repeated code:
When you notice repeated chunks of code, pull them into a function with a good name to avoid duplication and make your program easier 
to maintain.

Designing new functionality:
Sometimes you want a new feature that logically belongs in its own function, so you write it directly and give it a meaningful name,
 even if you start using it before it’s defined.


 function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);

  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}

printFarmInventory(7, 11);


Problem: Code is duplicated for cows and chickens, not easy to extend for more animals.


Step 1: Extract a function that handles zero-padding and printing together

function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);


Better: Reduced duplication, but the function name is a bit long and clumsy, and it mixes responsibilities (padding and printing).

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);

zeroPad is a small, reusable function with a clear purpose.

printFarmInventory uses zeroPad but handles printing/labeling separately.

More versatile and easier to understand or extend.


// FUNCTIONS AND SIDE EFFECTS


Functions called for their side effects:
These functions do something observable outside themselves, like printing to the console, modifying a variable, writing to a file, 
or changing the user interface.

function printMessage(msg) {
  console.log(msg);  // Side effect: printing output
}


Functions called for their return value:
These functions calculate and return a value, ideally without changing anything outside themselves. This makes 
them more reusable and composable.

function add(a, b) {
  return a + b;  // Returns a value, no side effects
}


Pure Functions
A pure function is a special kind of value-producing function with two important properties:

No side effects: It doesn’t modify anything outside its own scope or interact with the outside world.

Deterministic output: Given the same inputs, it always returns the same output.

function square(x) {
  return x * x;
}


// Side-effect function: called to do something visible outside
function printHello(name) {
  console.log("Hello, " + name);  // Output is a side effect
}

// Pure function: called for its return value; no side effects
function greet(name) {
  return "Hello, " + name;
}

// Pure function example - always same output for same input
function multiply(a, b) {
  return a * b;
}

// Impure function example - depends on external variable
let factor = 2;
function multiplyByFactor(x) {
  return x * factor;  // Output depends on external state (factor)
}




// SUMMARY

// Functions can be created in multiple ways:

// 1. Function expression assigned to a variable
const f = function(a) {
  console.log(a + 2);
};

// 2. Function declaration
function g(a, b) {
  return a * b * 3.5;
}

// 3. Arrow function (shorter syntax)
let h = a => a % 3;

// Understanding scopes is crucial:
// Each block creates a new scope.
// Variables declared inside a scope (parameters or local variables) are not visible outside.
// Note: `var` behaves differently—its scope is the nearest function or global scope.

// Using functions helps organize your code by separating tasks,
// avoiding repetition, and making the program easier to understand.
