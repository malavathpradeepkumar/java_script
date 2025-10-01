📌 Regular Expressions (Chapter 9 Intro)

🔹 Summary  
Regular expressions describe string patterns. They are powerful but tricky, allowing inspection and processing of text. In JS, regex can be made with `RegExp()` or `/pattern/`.

🔹 Important Points  
- Regex = object for string patterns.  
- Two ways: `new RegExp("abc")` or `/abc/`.  
- Special chars (/, +, ?, etc.) need `\` (backslash).  
- `\` in regex behaves differently than in strings.  

🔹 Code Explanation
let re1 = new RegExp("abc");  
// Creates regex using constructor → matches "abc"

let re2 = /abc/;  
// Creates regex using literal → matches "abc"

let aPlus = /A\+/;  
// Matches "A+" → `\+` means literal plus sign, not special regex symbol


📌 Testing Matches & Character Sets

🔹 Important Points
- `.test(string)` → returns true/false if regex matches.  
- `[ ]` → match any one character inside brackets.  
- `[0-9]` → digit range, same as `\d`.  
- Shortcuts: `\d` digit, `\w` alphanumeric, `\s` whitespace, `\D` non-digit, `\W` non-alphanumeric, `\S` non-whitespace, `.` any char except newline.  
- `[^ ]` → NOT those characters (inverted set).

🔹 Code Explanation
console.log(/abc/.test("abcde"));  
// /abc/ = regex pattern  
// .test("abcde") = method checks if "abc" exists  
// returns true

console.log(/abc/.test("abxde"));  
// No "abc" sequence → false

console.log(/[0123456789]/.test("in 1992"));  
// [0123456789] = any one digit  
// "1992" has digits → true

console.log(/[0-9]/.test("in 1992"));  
// [0-9] = range 0 to 9  
// works same as above → true

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;  
// \d = digit, repeated twice for MM, DD, YYYY, HH, MM  
// pattern = "dd-dd-dddd dd:dd"

console.log(dateTime.test("01-30-2003 15:20"));  
// matches → true

console.log(dateTime.test("30-jan-2003 15:20"));  
// "jan" not digits → false

let nonBinary = /[^01]/;  
// [^01] = any char except 0 or 1

console.log(nonBinary.test("1100100010100110"));  
// only 0 & 1 → false

console.log(nonBinary.test("0111010112101001"));  
// has "2" → true



📌 International Characters in Regex

🔹 Important Points
- \w = only English letters, digits, and underscore. Does NOT match é, ß, etc.  
- \s = matches all Unicode whitespace (no issue).  
- \p{ } = Unicode property matching (works only with `u` flag).  
- Examples: \p{L} = letter, \p{N} = number, \p{P} = punctuation, \P{L} = non-letter.  
- \p{Script=...} → match characters from a specific script (Greek, Arabic, etc.).  

🔹 Code Explanation
console.log(/\p{L}/u.test("α"));  
// \p{L} = any letter (Unicode property)  
// "α" (Greek letter) → true

console.log(/\p{L}/u.test("!"));  
// "!" is not a letter → false

console.log(/\p{Script=Greek}/u.test("α"));  
// Matches Greek script characters  
// "α" is Greek → true

console.log(/\p{Script=Arabic}/u.test("α"));  
// Checks if "α" is Arabic script  
// Not Arabic → false


📌 Repeating Parts of a Pattern

🔹 Important Points
- `+` → one or more times  
- `*` → zero or more times  
- `?` → optional (0 or 1 time)  
- `{n}` → exactly n times  
- `{m,n}` → between m and n times  
- `{m,}` → at least m times  

🔹 Code Explanation
console.log(/'\d+'/.test("'123'"));  
// \d+ = one or more digits  
// "'123'" matches → true

console.log(/'\d+'/.test("''"));  
// Needs at least 1 digit → false

console.log(/'\d*'/.test("'123'"));  
// \d* = zero or more digits  
// "'123'" has digits → true

console.log(/'\d*'/.test("''"));  
// zero digits allowed → true

let neighbor = /neighbou?r/;  
// u? = "u" optional (0 or 1)  

console.log(neighbor.test("neighbour"));  
// Has "u" → true

console.log(neighbor.test("neighbor"));  
// Without "u" → true

let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;  
// \d{1,2} = 1 or 2 digits (day, month, hour)  
// \d{4} = 4 digits (year)  
// \d{2} = 2 digits (minutes)

console.log(dateTime.test("1-30-2003 8:45"));  
// Matches pattern → true


📌 Grouping Subexpressions

🔹 Key Points  
- ( ) → group multiple elements so operators (*, +, ?) apply to the whole group.  
- `i` flag → case-insensitive matching.  

✅ Code Explanation
let cartoonCrying = /boo+(hoo+)+/i;  
// /.../ = regex literal  
// boo+ = "bo" followed by 1+ "o"  
// (hoo+)+ = group: "h" + 1+ "o", repeated 1+ times  
// i = case-insensitive flag

console.log(cartoonCrying.test("Boohoooohoohooo"));  
// String has "Boo" + repeated "hoo" groups  
// Matches → true



📌 Matches and Groups

🔹 Key Points  
- `.test()` → only true/false.  
- `.exec()` → returns array (matched text + groups) or null if no match.  
- Result object has `.index` (start position).  
- String also has `.match()` method (similar to exec).  
- ( ) → capturing groups → return extra elements in array.  
- (?: ) → non-capturing group (won’t appear in array).  
- If group not matched → undefined; if repeated → only last match stored.  

✅ Code Explanation
let match = /\d+/.exec("one two 100");  
// \d+ = one or more digits  
// exec returns ["100"]  
console.log(match);  
// ["100"]  
console.log(match.index);  
// 8 (starting position of match)

console.log("one two 100".match(/\d+/));  
// String .match() works like exec → ["100"]

let quotedText = /'([^']*)'/;  
// '([^']*)' → group matches text inside quotes  
console.log(quotedText.exec("she said 'hello'"));  
// ["'hello'", "hello"]

console.log(/bad(ly)?/.exec("bad"));  
// (ly)? = optional "ly"  
// Match is ["bad", undefined]

console.log(/(\d)+/.exec("123"));  
// (\d)+ = one or more digits, last group saved  
// ["123", "3"]

console.log(/(?:na)+/.exec("banana"));  
// (?:na)+ = non-capturing group, "na" repeated  
// ["nana"]



📌 The Date Class

🔹 Key Points  
- `new Date()` → current date & time.  
- `new Date(y, m, d, h, min, s, ms)` → specific date/time. (⚠ month starts at 0, day at 1).  
- Internally stored as ms since Jan 1, 1970 (Unix time).  
- `.getTime()` → returns timestamp in ms.  
- `Date.now()` → current ms count.  
- Date methods: getFullYear, getMonth, getDate, getHours, etc.  
- Groups from regex can be used to build Date objects.  

✅ Code Explanation
console.log(new Date());  
// Creates Date object → current date & time

console.log(new Date(2009, 11, 9));  
// Year=2009, Month=11 (Dec), Day=9  
// → Dec 09 2009 00:00:00

console.log(new Date(2009, 11, 9, 12, 59, 59, 999));  
// Adds hours, minutes, seconds, ms  
// → Dec 09 2009 12:59:59.999

console.log(new Date(2013, 11, 19).getTime());  
// Returns ms since Jan 1, 1970  
// → 1387407600000

console.log(new Date(1387407600000));  
// Rebuilds date from ms timestamp

function getDate(string) {  
  let [_, month, day, year] =  
  /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);  
  // Regex groups: month, day, year  
  // _ = skip full match  
  return new Date(year, month - 1, day);  
}

console.log(getDate("1-30-2003"));  
// Parses "1-30-2003" → Jan 30 2003



📌 Boundaries & Look-Ahead

🔹 Key Points  
- ^ → start of string, $ → end of string.  
- \b → word boundary (word char vs nonword char).  
- Boundaries don’t consume characters, they only check position.  
- Look-ahead (?=...) → must be followed by pattern (positive).  
- Negative look-ahead (?!...) → must NOT be followed by pattern.  

✅ Code Explanation
console.log(/a(?=e)/.exec("braeburn"));  
// a(?=e) → "a" only if followed by "e"  
// In "braeburn", "a" before "e" → ["a"]

console.log(/a(?! )/.exec("a b"));  
// a(?! ) → "a" only if NOT followed by space  
// In "a b", "a" has space after it → null



📌 Choice Patterns

🔹 Key Points  
- `|` → choice between alternatives.  
- ( ) → group choices together.  
- `s?` → optional "s" (singular or plural).  

✅ Code Explanation
let animalCount = /\d+ (pig|cow|chicken)s?/;  
// \d+ = one or more digits  
// (pig|cow|chicken) = choice between these words  
// s? = optional "s" for plural  

console.log(animalCount.test("15 pigs"));  
// Matches → true

console.log(animalCount.test("15 pugs"));  
// "pugs" not in choices → false



📌 Mechanics of Matching

🔹 Key Points  
- Regex engine checks string position by position until match found or end reached.  
- It returns the **first successful match**.  
- Matching process works like a **flow diagram**: each step verifies if the string part fits the pattern.  
- If a full path is completed → match succeeds; else → fails.  


📌 Backtracking

🔹 Key Points  
- Regex engine tries branches in order; if one fails, it "backtracks" to try another.  
- Example `/^([01]+b|[\da-f]+h|\d+)$/` → tries binary, then hex, then decimal.  
- Repetition operators (*, +) also cause backtracking if the first attempt fails.  
- Engine shortens matches step by step until success.  
- Poorly written patterns (like /([01]+)+b/) can cause **catastrophic backtracking** → very slow on long input.  

✅ Code Explanation
/^([01]+b|[\da-f]+h|\d+)$/  
// ^ = start of string, $ = end  
// ( ... | ... | ... ) = choice branches  
// [01]+b = binary digits + 'b'  
// [\da-f]+h = digits/letters a–f + 'h' (hexadecimal)  
// \d+ = decimal number with no suffix  

/^.*x/  
// .* = match everything greedily  
// Then engine backtracks until it finds "x"
