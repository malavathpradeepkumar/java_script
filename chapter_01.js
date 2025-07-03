/*

Infinity: Represents a value bigger than any number.
Example: 1 / 0 → Infinity
But Infinity - 1 is still Infinity. It doesn’t follow normal math rules, so don’t rely on it too much.

-Infinity: Like Infinity but very small (negative).
Example: -1 / 0 → -Infinity

NaN (Not a Number): Shows when a calculation doesn’t make sense.
Example: 0 / 0 → NaN
Also: Infinity - Infinity → NaN

Strings are compared letter by letter using Unicode codes. Uppercase letters come before lowercase, so "Z" < "a" is true.
NaN == NaN   // false
NaN (not a number) is special because it’s not equal to itself:

1 + 1 == 2 && 10 * 10 > 50  
// true && true → true
perator precedence (order):

|| (OR) has the lowest precedence
&& (AND) is next
Comparison operators like >, == have higher precedence
Arithmetic operators have the highest precedence.

Empty values:

JavaScript has two special values to show "no value":

undefined – means "no value was assigned"
Example: a function that returns nothing gives undefined
null – means "empty on purpose"
You can set something to null to show it's empty.
Both are real values but don’t hold any data.
Tip: Most of the time, you can treat null and undefined the same.

8 * null         // 0      (null becomes 0)
"5" - 1          // 4      ("5" becomes 5)
"5" + 1          // "51"   (1 becomes "1", then strings are joined)
"five" * 2       // NaN    ("five" can't become a number)
false == 0       // true   (false becomes 0)

null == undefined     // true  
null == 0             // false  

Use === and !== instead of == and !=:
=== checks value and type
== converts types before comparing
"" == false      // true  (type coercion)
"" === false     // false (no coercion, types are different)

✅ Use === and !== to avoid confusion from type conversion.


|| (OR)
Returns the first truthy value or the last one if none are truthy.

null || "user"     // "user"
"Agnes" || "user"  // "Agnes"
0 || -1            // -1
"" || "!?"         // "!?"

✅ Use || to set default values when the first value might be false-like.

🧠 False-like values: 0, "", NaN, null, undefined, false

?? (Nullish Coalescing)
Returns the right value only if the left one is null or undefined.
The ?? operator only checks if a value is null or undefined — it does not care if the value is false, 0, "", or anything else.

0 || 100       // 100 (because 0 is false)
0 ?? 100       // 0   (because 0 is not null or undefined)
null ?? 100    // 100

✅ Use ?? when you only want to replace null or undefined, not 0 or "".


&& (AND)
Returns the first false-like value, or the last one if none are false-like.
&& means: "If the first thing is true, return the second thing."
If the first thing is false, it stops and returns that.

true && "yes"    // "yes"
false && "no"    // false

✅ Use && when the second value should only run if the first is true.

Short-circuiting:
These operators skip the second part if not needed:

true || anything → skips anything
false && anything → skips anything


