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
let result = str.replace(regex, '$3$2$1');
```

```javascript
let str = "2020-02-15"; //yyyy-mm-dd
let regex = /(\d{4})-(\d{2})-(\d{2})/i 
let result = str.replace(regex, '$2/$3/$1'); // mm/dd/yyyy
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

