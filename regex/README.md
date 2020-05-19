# Regular Expression
Regular expression are used to match whole or specific part of string literal. 

The following is the code for creating regular expression in javascript
```javascript
let regex = /pattern/;
```

### Using *test* method
Regex instance has api method called 'test'. This method accept a string as argument. Upon call the test method it returns a boolean value; it returns true if pattern is found in the provided string, otherwise false.

```javascript
let str = "Hello, World!";
let regex = /Hello/;
let result = regex.test(str);
```

### Case sensitivity
Regular expression are by default case sensitive. Pattern '/hello/' will only match lowercase 'hello'. if string contains 'Hello' it will not match unless pattern instructed to ignore case.

### Using pipe '|'
Regular expression build using '|' adds capability to have more than one match type. e.g.

```javascript
let petRegex = /dog|cat|bird/;
let result = petRegex.test("My friend as a dog."); // true
result = petRegex.test("My mom's cat name is 'rani'"); // true
result = petRegex.test("They have Guinea pig"); // false
```

### Ignore case using 'i'
Regular expression can be made case insensitive using 'i' at the end of pattern '/pattern/i'. e.g.
```javascript
let regex = /hello/i;
let result = regex.test("Hello, World!"); // true
result = regex.test("HELLO, World!"); // true
result = regex.test("heLlo, World!"); // true
```

### *match* method
String literal provide match method that takes regular expression. It returns array contains details of found pattern, otherwise null

```javascript
let regex = /job/;
let str = "Good job!";
let result = str.match(regex); // ["job", index: 5, input: "Good job!", groups: undefined]
```

Above code will only return first match found in the string. Multiple match can be found using 'g' in the regular expression e.g.

```javascript
let regex = /is/g;
let str = "This is a book";
let result = str.match(regex); // ["is", "is"]
```

```javascript
let regex = /twinkle/gi; // for ignoring case
let str = "Twinkle, twinkle, little star";
let result = str.match(regex); // ["Twinkle", "twinkle"]
```

## Regular expression : Wildcards
Regular expression shines and shows its true significance when it is constructed using wildcards characters.

### Period (.) 
Wildcard character period (.) can match any one character. e.g.
pattern '/hu./' will match 'hug', 'hut', 'hue', etc.

```javascript
let str = "I run to bus station";
let regex = /.un/; // will match 'run'
let result = regex.test(str); // true 
```

### Character class '[]'
Character classes define number of matching possibilities via grouping character inside the square bracket '[]'. e.g. regex '/b[iuao]/gi' will match 'big','bug','bag',or 'bog'

```javascript
let str = "How do you like to stay there? It was nice."
let regex = /[aeiou]/gi; // will match all vowels regardless of case
let result = str.match(regex); // [ 'o', 'o', 'o', 'u', 'i', 'e', 'o', 'a', 'e', 'e', 'I', 'a', 'i', 'e' ]
```
### Match letters with Range (-)
Regex can be written with range of character in sequence e.g. '/[a-e]at/gi' will match 'cat', 'bat', or 'eat'

```javascript
let str = "It is a good day today!";
let regex = /[a-z]/gi; // will match all vowels regardless of case
let result = str.match(regex); // ["I","t","i","s","a","g","o","o","d","d","a","y","t","o","d","a","y"]
```
```javascript
let str = "your password is '1234Abcd!xyz";
let regex = /[x-z4-9]/gi;
let result = str.match(regex); //[ 'y', '4', 'x', 'y', 'z' ]
```

### Caret character (^)
Regex can negate characters specified with caret '^' as the fist character in pattern '/[^a]/gi'. This will exclude 'a' or 'A' while performing match.

```javascript
let str = "Watching tutorial no 54";
let regex = /[^aeiou0-9]/gi;
let result = str.match(regex); //[ 'W', 't', 'c', 'h', 'n', 'g', ' ', 't', 't', 'r', 'l', ' ', 'n', ' ' ]
```

### Match character one or more times (+)

```javascript
let str = "your address is added to database";
let regex = /ad+/gi;
let result = str.match(regex); // [ 'add', 'add' ]
```

### Match character appear zero or more times (*)
```javascript
let str = "Act as accountant";
let regex = /Ac*/gi;
let result = str.match(regex); // [ 'Ac', 'a', 'acc', 'a' ]
```

### Find character with lazy match (?)
Regex perform greedy match where it tries to match longest possible part of a string. However regex can be return to perform lazy match

 ```javascript
let str = "<h1>Headline</h1>";
let regex = /<.*>/gi; // greedy match
let result = str.match(regex); // [ '<h1>Headline</h1>' ]
```

 ```javascript
let str = "<h1>Headline</h1>";
let regex = /<.*?>/gi; // lazy match
let result = str.match(regex); // [ '<h1>', '</h1>' ]
```
### Match beginning with Caret character (^)
In regex, if "^" used in the beginning of the pattern will try to match the pattern from the beginning only.

 ```javascript
let str = "Heri and Shally has car. Heri has blue car. Shally has red car";
let regex = /^Heri/gi;
let result = str.match(regex); // [ 'Heri' ]
```

### Match ending with dollar sign character ($)

 ```javascript
let str = "I park my car in the basement";
let regex = /basement$/gi;
let result = str.match(regex); // [ 'basement' ]
```

### Match All Letters and Numbers (\w) 
'\w' is a short cut to [A-Za-z0-9_]

 ```javascript
let str = "pass123_xyz!";
let regex = /\w+/gi;
let result = str.match(regex); // [ 'pass123_xyz' ]
```

### Match Everything But Letters and Numbers (\W)
'\W' is a short cut to [^A-Za-z0-9_]

 ```javascript
let str = "pass@123_xyz!";
let regex = /[\W]/gi;
let result = str.match(regex); // [ '@', '!' ]
```

### Match All Numbers with (\d)
'\d' is a short cut to [0-9]

 ```javascript
let str = "40%";
let regex = /\d+/;
let result = str.match(regex); // [ '40', index: 0, input: '40%', groups: undefined ]
```

### Match All Non-Numbers (\D)
'\D' is a short cut to [^0-9]

 ```javascript
let str = "40%";
let regex = /\D/g;
let result = str.match(regex); // [ '%' ]
```

### Match Whitespace (\s)
'\s' is the short cut to [ \r\t\f\n\v]

 ```javascript
let str = "This is a car\rCar is blue";
let regex = /\s/g;
let result = str.match(regex); // [ ' ', ' ', ' ', '\r', ' ', ' ' ]
```

### Match Non-Whitespace Characters (\S)
'\S' is the short cut to [^ \r\t\f\n\v]

 ```javascript
let str = "This is a car\rCar is blue";
let regex = /\S/g;
let result = str.match(regex); // ["T","h","i","s","i","s","a","c","a","r","C","a","r","i","s","b","l","u","e"]
```
### Quantity specifiers '{lower, upper}'
Specify Upper and Lower Number of Matches with 

 ```javascript
let str = "ohhh no";
let regex = /oh{2,6} no/g; // minimum 2 h count and max 6 h count
let result = str.match(regex); // [ 'ohhh no' ]
```

 ```javascript
let str = "oh no";
let regex = /oh{2,6} no/g;
let result = str.match(regex); // null
```

Specify Only the Lower Number of Matches
```javascript
let str = "oh yes";
let regex = /oh{2,} yes/g;
let result = str.match(regex); // null
```

```javascript
let str = "ohhhhhhhhhhh yes";
let regex = /oh{2,} yes/g;
let result = str.match(regex); // [ 'ohhhhhhhhhhh yes' ]
```

Specify Exact Number of Matches
```javascript
let str = "ohh yes";
let regex = /oh{2} yes/g;
let result = str.match(regex); // [ 'ohh yes' ]
```

```javascript
let str = "ohhh yes";
let regex = /oh{2} yes/g;
let result = str.match(regex); // null
```

### Check for optional character (?)

```javascript
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/i;
rainbowRegex.test(american); // true
rainbowRegex.test(british); // true
```

## Lookahead
Lookahead pattern search for the pattern which is not yet part of search string. 

### Positive Lookahead (?=...)
```javascript
let str = "oh yes";
let regex = /oh(?= yes)/;
let result = regex.test(str); // true
```

```javascript
let str = "oh yes";
let regex = /oh(?= no)/;
let result = regex.test(str); // false
```

### Negative Lookahead (?!...)
```javascript
let str = "oh no";
let regex = /oh(?! yes)/;
let result = regex.test(str); // false
```

```javascript
let str = "oh yes";
let regex = /oh(?! no)/;
let result = regex.test(str); // true
```

## Grouping of Characters with parentheses ()
```javascript
let str = "oh yes";
let regex = /oh (no|yes)/;
let result = regex.test(str); // true
```

```javascript
let str = "oh no";
let regex = /oh (no|yes)/;
let result = regex.test(str); // true
```
### Reuse Patterns Using Capture Groups
Parentheses creates a group that can be reuse by using number starting from 1 followed by "\\". e.g

```javascript
let str = "jhony jhony.I like tale tale";
let regex = /(\w+)\s\1/g
let result = str.match(regex); // [ 'jhony jhony', 'tale tale' ]
```

### Use Capture Groups to Search and Replace
```javascript
let str = "I jump to like";
let regex = /(jump)(.+)(like)/i
let result = str.replace(regex, '$3$2$1'); //I like to jump
```

```javascript
let str = "2020-02-15"; //yyyy-mm-dd
let regex = /(\d{4})-(\d{2})-(\d{2})/i 
let result = str.replace(regex, '$2/$3/$1'); // 02/15/2020 // mm/dd/yyyy
```

```javascript
let str = "    Replace spaces from start and end      ";
let regex = /^\s+|\s+$/g 
let result = str.replace(regex, ''); //'Replace spaces from start and end'
```

```javascript
let str = "Remove       extra       spaces from     sentence";
let regex = /(\s{2,})/g 
let result = str.replace(regex, ' '); //'Remove extra spaces from sentence'
```

## Most common regex used in applications

### Javascript: regex for XSS protection

```javascript
var isInlineJavascript = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;

isInlineJavascript.test('javascript:alert("XSS")') // true
isJavaScriptProtocol.test(`j\ta\tv\ta\ts\tc\tr\ti\tp\tt:`) // true //same for \r\n
isInlineJavascript.test('javascript') // false
```

### Regex for email validation

```javascript
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let email = "ab.ab@gmail.com";
let result = regex.test(email); // true;
```

### Regex for phone number validation
[Indian Phone number validation](https://codesandbox.io/s/prod-leftpad-6v5x7)

```javascript
// Indian mobile number
let regexMobileNumber = /^((\+?(91|\(91\)){1}(-|\s)?\d{10})|(\d{10}))/;
let regex8DigitLandline = /^((\+?(91|\(91\)){1}(-|\s)?\d{2}(-|\s)?\d{8})|(\d{2}(-|\s)?\d{8}))$/;
let regex7DigitLandline = /^((\+?(91|\(91\)){1}(-|\s)?\d{3}(-|\s)?\d{7})|(\d{3}(-|\s)?\d{7}))$/;
let regex6DigitLandline = /^((\+?(91|\(91\)){1}(-|\s)?\d{4}(-|\s)?\d{6})|(\d{4}(-|\s)?\d{6}))$/;

let validIndianNumberRegexs = [
  regexMobileNumber,
  regex8DigitLandline,
  regex7DigitLandline,
  regex6DigitLandline
];

function validate(phoneNumber) {
  for (let regex of validIndianNumberRegexs) {
    if (regex.test(phoneNumber)) {
      return true;
    }
  }
  return false;
}

function iterateAndPrintResult(list) {
  for (let phoneNumber of list) {
    let vaildNumber = validate(phoneNumber);
    let result = vaildNumber === true ? "valid" : "invalid";
    console.log(`${phoneNumber} is ${result}`);
  }
}

let validFormat = [
  "+(91)9899736934",
  "+(91) 9899756934",
  "+(91)-9899756934",
  "+919899726934",
  "9899716934",
  "+91 11 12345678",
  "+91-11-12345678",
  "11 12345678",
  "11-12345678",
  "1112345678",
  "+91 222 1234567",
  "91 222 1234567",
  "222 1234567",
  "+91 3333 123456",
  "3333 123456"
];

let invalidFormat = [
  "+(919899736934",
  "+91)9899736934",
  "+9899736934",
  " 9899736934",
  "-9899736934",
  "+222 1234567"
];

console.log("Valid phone numbers $$$");
iterateAndPrintResult(validFormat);

console.log("                                  ");

console.log("Invalid phone number $$$");
iterateAndPrintResult(invalidFormat);
```

[American phone number validation](https://codesandbox.io/s/agitated-mountain-ontn4)

```javascript
// America phone number
let regex = /^((1(-|\s)?)?(\d{3}|\(\d{3}\))(-|\s)?\d{3}(-|\s)?\d{4})$/;

function validate(phoneNumber) {
  return regex.test(phoneNumber);
}

function iterateAndPrintResult(list) {
  for (let phoneNumber of list) {
    let vaildNumber = validate(phoneNumber);
    let result = vaildNumber === true ? "valid" : "invalid";
    console.log(`${phoneNumber} is ${result}`);
  }
}

let validFormat = [
  "555-555-5555",
  "1 555-555-5555",
  "1 (555) 555-5555",
  "5555555555",
  "555-555-5555",
  "(555)555-5555",
  "1(555)555-5555",
  "1 555 555 5555",
  "1 456 789 4444"
];

let invalidFormat = [
  "555-5555",
  "5555555",
  "1 555)555-5555",
  "123**&!!asdf#",
  "55555555",
  "(6054756961)",
  "2 (757) 622-7382",
  "0 (757) 622-7382",
  "-1 (757) 622-7382",
  "2 757 622-7382",
  "10 (757) 622-7382",
  "27576227382",
  "(275)76227382",
  "2(757)6227382",
  "2(757)622-7382",
  "555)-555-5555",
  "(555-555-5555",
  "(555)5(55?)-5555"
];

console.log("Valid phone numbers $$$");
iterateAndPrintResult(validFormat);

console.log("                                  ");

console.log("Invalid phone number $$$");
iterateAndPrintResult(invalidFormat);

```