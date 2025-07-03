/* 
Expressions and Statements#

An expression is a piece of code that produces a value.
22  
"hello"  
3 + 4  
!false
Expressions can be combined inside other expressions — just like small parts of a sentence inside a bigger one.

A statement is a complete action in a program — like a full sentence.
A program is made up of statements.

1;
!false;
These are valid, but useless, because they do nothing — they have no side effect.

🧠 What is a side effect?
A side effect is when code changes something, like:
Showing output on screen (e.g. console.log)
Changing a variable
Writing to a file or sending data


// BINDINGS

If you create a binding but don’t give it a value, its value is undefined.
var is older and behaves a bit differently — it’s less recommended now.
const creates a binding that cannot be changed (a constant). Good for values you want to keep fixed.

// Binding names

Binding names (variable names) can use letters, digits, $, and _.

// FUNCITONS
Note: prompt() is less common in modern web programming because it gives little control over the dialog’s appearance.

// RETURN VALUES
console.log(Math.max(2, 4)); // → 4
console.log(Math.min(2, 4) + 100); // → 102
When a function returns a value, you can use that value right away in other expressions.

// Control flow
Control flow means how a program runs its statements one after another, from top to bottom, like reading a story.

let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + theNumber * theNumber);

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
}

//  !Number  explanation
Number.isNaN(2) → false
!Number.isNaN(2) → true

Number.isNaN(...) returns true only if the value is NaN.
But we want to run the code only when it’s a valid number.
So we put ! in front to say: "not NaN".


Use else to run code when the if condition is false, creating two paths.

let num = Number(prompt("Pick a number"));
if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}


// Conditional execution

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
}

 If you type something like "parrot", it shows nothing, because that’s not a number.

 let num = Number(prompt("Pick a number"));
if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

// while and do loops




let result = 1;
let counter = 0;

while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}

console.log(result); // → 1024


🔄 do...while Loop

There’s another kind of loop: the do...while loop. This one is guaranteed to run at least once, even if the condition is false the first time.

let number = 0;
do {
  console.log(number);
  number = number + 2;
} while (number <= 12);


let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log("Hello " + yourName);

| Feature                     | `while` loop | `do...while` loop               |
| --------------------------- | ------------ | ------------------------------- |
| Condition checked **first** | ✅ Yes        | ❌ No (runs first, checks later) |
| Runs **at least once**      | ❌ Not always | ✅ Always runs once              |



🧠 What is a for loop?
A for loop is a compact way to repeat code.
It's like a while loop, but it puts the counter, the condition, and the update all in one line.

for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}



let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}



🎯 Both do the same thing, but for is shorter and neater when you:


let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024


🧠 What does "breaking a loop" mean?
Normally, a loop stops when the condition becomes false.
But with the break statement, you can stop the loop immediately — even if the condition is still true.

🔑 New Keywords:
break → 🚪 Exits the loop right away.

continue → 🔄 Skips the rest of the loop for this round, and goes to the next iteration.


for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}

It checks if the number is divisible by 7.

Example: 21 % 7 = 0 ✅ (divisible)

22 % 7 = 1 ❌ (not divisible)

⚠️ Infinite Loop Warning!
If you remove the break, the loop will go on forever:

🔁 Bonus: continue

for (let number = 0; number < 10; number = number + 1) {
  if (number % 2 == 0) {
    continue; // skip even numbers
  }
  console.log(number);
}


Updating bindings succinctly

It means changing the value of a variable in a shorter way.

counter = counter + 1; // add 1 to counter
counter += 1; // add 1 to counter (succinct way)
counter++; // add 1 to counter (shortest way)



Dispatching on a value with switch

switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella."); // if answer is "rainy"
    break; // stop here, don't continue to next cases

  case "sunny":
    console.log("Dress lightly."); // if answer is "sunny"
    // no break here, so it continues to "cloudy" case

  case "cloudy":
    console.log("Go outside."); // runs for both "sunny" and "cloudy"
    break; // stop here

  default:
    console.log("Unknown weather type!"); // if no case matches
    break; // stop here
}


Instead of many if statements, JavaScript offers a switch statement.

switch runs the code starting at the matching case, or default if none match.

It keeps running all code after that case until it sees a break.

This can be useful to share code between cases, but forgetting break can cause bugs.


// Capitalization

fuzzylittleturtle
fuzzy_little_turtle
FuzzyLittleTurtle
fuzzyLittleTurtle


Binding (variable) names cannot have spaces.
When a name has multiple words, you have these common styles:
The first one is hard to read.
Underscores _ are easier to read but a bit annoying to type.
The standard JavaScript style is the last one:
capitalize every word except the first (called camelCase).
This style is common because mixed styles make code harder to read.
Sometimes, like the Number function, the first letter is also capitalized.
This marks it as a constructor

// Comments

let accountBalance = calculateBalance(account); // calculate account balance

accountBalance.adjust(); // adjust the balance

let report = new Report(); // create new report

addToReport(accountBalance, report); // add balance info to report

/*
I first found this number scrawled on the back of an old
notebook. Since then, it has often dropped by, showing up in
phone numbers and serial numbers of products I've bought.
It obviously likes me, so I've decided to keep it.
*/
const myNumber = 11213; // important special number
