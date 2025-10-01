🔹 Headline: Abstract Data Type / Object Class

👉 Means: A hidden complex program that only shows simple buttons (methods) to use. Like a mixer 🎛️

🔹 Methods in JavaScript

👉 Methods = functions stored inside objects.
👉 this = points to the object that called the method.
👉 Arrow functions don’t create their own this, they use parent scope’s this.
👉 call() lets you set this manually.

// Define a function called speak
function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}

// Create objects with a type property and attach speak as method
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

// Call the method on whiteRabbit
whiteRabbit.speak("Oh my fur and whiskers");
// → The white rabbit says 'Oh my fur and whiskers'

// Call the method on hungryRabbit
hungryRabbit.speak("Got any carrots?");
// → The hungry rabbit says 'Got any carrots?'

// Call the function explicitly with call(), setting this = whiteRabbit
speak.call(whiteRabbit, "Hurry");
// → The white rabbit says 'Hurry'

// Arrow function example inside method
let finder = {
  find(array) {
    // .some() checks if any element matches condition
    return array.some(v => v == this.value); 
    // here arrow fn uses this.value from outer object
  },
  value: 5
};

console.log(finder.find([4, 5])); 
// → true



🔹 Prototypes in JavaScript

👉 Prototype = shared storage for methods/properties.
👉 Objects can “inherit” from another object’s properties.
👉 {} links to Object.prototype by default.
👉 Object.getPrototypeOf() shows prototype of an object.
👉 Object.create(proto) creates a new object with proto as prototype.


let empty = {};
console.log(empty.toString);
// → function toString()…{}
// Although 'empty' has no toString, it comes from Object.prototype

console.log(empty.toString());
// → [object Object]
// Method is found in prototype chain

console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true ({} objects inherit from Object.prototype)

console.log(Object.getPrototypeOf(Object.prototype));
// → null (top of prototype chain, no further prototype)

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// → true (functions inherit from Function.prototype)

console.log(Object.getPrototypeOf([]) == Array.prototype);
// → true (arrays inherit from Array.prototype)




// Create a prototype object with a speak method
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};

// Create blackRabbit inheriting from protoRabbit
let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = "black";   // own property
blackRabbit.speak("I am fear and darkness");
// → The black rabbit says 'I am fear and darkness'



🔹 Classes in JavaScript

👉 Class = blueprint for creating objects (instances).
👉 constructor sets per-instance properties.
👉 Methods go inside class → shared by all instances via prototype.
👉 new keyword creates new object (instance).
👉 Before 2015 → used normal functions + prototype.
👉 Constructors are functions, their prototype property defines instance behavior.


// Constructor function (old style)
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit); // create object with protoRabbit as prototype
  rabbit.type = type;                      // set type property
  return rabbit;                           // return new rabbit
}


// Modern class declaration
class Rabbit {
  constructor(type) {           // special method called when new instance is made
    this.type = type;           // set per-instance property
  }

  speak(line) {                 // method shared by all instances
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");   // create instance with new



// Old school way before ES6 classes
function ArchaicRabbit(type) {
  this.type = type;                          // set instance property
}

ArchaicRabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says '${line}'`); // method via prototype
};

let oldSchoolRabbit = new ArchaicRabbit("old school");  // instance



// Checking prototypes
console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// → true  (Rabbit is a function, so its prototype = Function.prototype)

console.log(Object.getPrototypeOf(killerRabbit) == Rabbit.prototype);
// → true (instances link to class prototype)






// Declaring class properties directly
class Particle {
  speed = 0;                   // instance property (not in prototype)
  constructor(position) {
    this.position = position;  // per-instance property
  }
}




// Class expression (anonymous class)
let object = new class { 
  getWord() { return "hello"; } // method defined directly
};

console.log(object.getWord());
// → hello





🔹 Private Properties in JavaScript

👉 # before name = private (only accessible inside class).
👉 Private methods/properties hidden from outside.
👉 Regular props = just assign, private props = must declare in class.


class SecretiveObject {
  #getSecret() {                    // private method (only inside class)
    return "I ate all the plums";
  }

  interrogate() {                   // public method
    let shallISayIt = this.#getSecret();  // call private method
    return "never";
  }
}

// Trying object.#getSecret() outside → ❌ Error



class RandomSource {
  #max;                             // declare private property

  constructor(max) {
    this.#max = max;                // assign private property
  }

  getNumber() {                     // public method
    return Math.floor(Math.random() * this.#max);  
    // random number between 0 and max-1
  }
}







🔹 Overriding Derived Properties

👉 Adding a property directly to an object hides the same property in its prototype.
👉 Instances can override shared prototype properties.
👉 Useful for customizing single objects while keeping defaults in prototype.


Rabbit.prototype.teeth = "small";     // add property to prototype

console.log(killerRabbit.teeth);      
// → small (comes from prototype, no own property yet)

killerRabbit.teeth = "long, sharp, and bloody"; 
// own property now overrides prototype

console.log(killerRabbit.teeth);      
// → long, sharp, and bloody (own property hides prototype)

console.log((new Rabbit("basic")).teeth); 
// → small (new instance uses prototype value)

console.log(Rabbit.prototype.teeth);  
// → small (prototype property unchanged)




console.log(Array.prototype.toString == Object.prototype.toString);
// → false (arrays have their own toString)

console.log([1, 2].toString());
// → 1,2 (array toString joins elements with commas)

console.log(Object.prototype.toString.call([1, 2]));
// → [object Array] (basic Object toString used directly)





🔹 Maps in JavaScript

👉 Object as map = key → value (but inherits unwanted props like toString).
👉 Object.create(null) → object without prototype (safe map).
👉 Map class = built-in safe structure, any type of keys allowed.
👉 Key methods: .set(), .get(), .has().
👉 Object.keys & Object.hasOwn → check only own properties.




// Using plain object as map
let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62

console.log("Is Jack's age known?", "Jack" in ages);
// → false (Jack not in object)

console.log("Is toString's age known?", "toString" in ages);
// → true (comes from Object.prototype, not real data!)






// Safer: create object without prototype
console.log("toString" in Object.create(null));
// → false (no unwanted inherited props)




// Map class (modern way)
let ages = new Map();
ages.set("Boris", 39);   // add key-value pair
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62

console.log("Is Jack's age known?", ages.has("Jack"));
// → false

console.log(ages.has("toString"));
// → false (safe, no prototype pollution)




// Checking only own properties
console.log(Object.hasOwn({x: 1}, "x"));
// → true (x is real property)

console.log(Object.hasOwn({x: 1}, "toString"));
// → false (ignores prototype chain)






🔹 Polymorphism in JavaScript

👉 Polymorphism = same code works on different object types, if they share the same interface.
👉 Example: toString() works differently for objects, arrays, etc.
👉 Arrays, strings, and array-like objects share the "length + indexed elements" interface.






// Override toString for Rabbit prototype
Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};

console.log(String(killerRabbit));
// → a killer rabbit
// String() calls the custom toString()



// Using forEach on an array-like object
Array.prototype.forEach.call({
  length: 2,   // looks like an array with 2 elements
  0: "A",      // index 0
  1: "B"       // index 1
}, elt => console.log(elt));

// → A
// → B
// Works because object follows "array-like" interface




🔹 Getters, Setters & Statics

👉 Getter = method that runs when you read a property.
👉 Setter = method that runs when you write to a property.
👉 Static = method attached to class itself, not instances.



// Example: Getter
let varyingSize = {
  get size() {                          // getter property
    return Math.floor(Math.random() * 100); // returns random number
  }
};

console.log(varyingSize.size); // → random value
console.log(varyingSize.size); // → another random value
// Accessing .size calls the getter each time



// Example: Class with getter, setter, static
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;             // store temperature in Celsius
  }

  get fahrenheit() {                    // getter
    return this.celsius * 1.8 + 32;     // convert to Fahrenheit
  }

  set fahrenheit(value) {               // setter
    this.celsius = (value - 32) / 1.8;  // update Celsius from Fahrenheit
  }

  static fromFahrenheit(value) {        // static method (class-level)
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);         
console.log(temp.fahrenheit); // → 71.6 (calls getter)

temp.fahrenheit = 86;         // calls setter
console.log(temp.celsius);    // → 30 (Celsius updated)

let boil = Temperature.fromFahrenheit(212); // static method
console.log(boil.celsius);   // → 100



🔹 Symbols in JavaScript

👉 Symbols = unique values (cannot clash with string property names).
👉 Added in 2015 → solve naming conflicts in interfaces.
👉 Can be used as object keys safely alongside normal properties.
👉 Syntax: let s = Symbol("desc").


let sym = Symbol("name");              // create unique symbol
console.log(sym == Symbol("name"));
// → false (each Symbol is always unique)

// Use symbol as property key
Rabbit.prototype[sym] = 55;           
console.log(killerRabbit[sym]);
// → 55 (property accessed with the same symbol)





const length = Symbol("length");       

Array.prototype[length] = 0;          // add symbol property

console.log([1, 2].length);
// → 2 (normal length property)

console.log([1, 2][length]);
// → 0 (separate symbol property, no conflict)




// Using symbol property inside object literal
let myTrip = {
  length: 2,               // normal property
  0: "Lankwitz",
  1: "Babelsberg",
  [length]: 21500          // symbol property (in brackets)
};

console.log(myTrip[length], myTrip.length);
// → 21500 2
// myTrip has both: a string "length" and a symbol length





🔹 Iterator Interface in JavaScript

👉 for/of needs objects with [Symbol.iterator] method.
👉 That method returns an iterator with next() → {value, done}.
👉 done: true means iteration finished.
👉 ... (spread) works on any iterable.






// Built-in iterator from a string
let okIterator = "OK"[Symbol.iterator]();

console.log(okIterator.next());
// → {value: "O", done: false}

console.log(okIterator.next());
// → {value: "K", done: false}

console.log(okIterator.next());
// → {value: undefined, done: true}




// List class (linked list style)
class List {
  constructor(value, rest) {
    this.value = value;                   // current value
    this.rest = rest;                     // link to next node (or null)
  }

  get length() {                          // getter for list length
    return 1 + (this.rest ? this.rest.length : 0);
  }

  static fromArray(array) {               // static method (class-level)
    let result = null;
    for (let i = array.length - 1; i >= 0; i--) {
      result = new this(array[i], result); // build list backwards
    }
    return result;
  }
}





// Iterator class for List
class ListIterator {
  constructor(list) {
    this.list = list;                     // start at head of list
  }

  next() {
    if (this.list == null) {              // end of list
      return {done: true};
    }
    let value = this.list.value;          // current value
    this.list = this.list.rest;           // move to next node
    return {value, done: false};          // return value + not done
  }
}




// Make List iterable
List.prototype[Symbol.iterator] = function() {
  return new ListIterator(this);          // return iterator
};

// Use for/of with List
let list = List.fromArray([1, 2, 3]);
for (let element of list) {
  console.log(element);
}
// → 1
// → 2
// → 3





// Spread syntax also uses iterators
console.log([..."PCI"]);
// → ["P", "C", "I"]




🔹 Inheritance in JavaScript

👉 extends = subclass inherits from superclass.
👉 super = call parent constructor or methods.
👉 Subclass can override methods/getters.
👉 Useful for reusing code, but can make programs more tangled.




// Subclass LengthList extends List
class LengthList extends List {
  #length;                               // private property

  constructor(value, rest) {
    super(value, rest);                  // call parent (List) constructor
    this.#length = super.length;         // store parent's length in private field
  }

  get length() {                         // override getter
    return this.#length;                 // return stored length (faster)
  }
}

console.log(LengthList.fromArray([1, 2, 3]).length);
// → 3



🔹 instanceof Operator in JavaScript

👉 Checks if an object comes from a given class (or its parent).
👉 Works with custom classes + built-in ones.
👉 Inheritance is respected → subclass is also instance of superclass.




console.log(new LengthList(1, null) instanceof LengthList);
// → true  (direct instance)

console.log(new LengthList(2, null) instanceof List);
// → true  (LengthList extends List → still a List)

console.log(new List(3, null) instanceof LengthList);
// → false (List not a subclass of LengthList)

console.log([1] instanceof Array);
// → true  (array is instance of Array)
