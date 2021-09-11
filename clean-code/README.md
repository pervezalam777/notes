# Clean Code
Why the bad code get written?

Sometimes you just trying to complete the task on time and you knows that is not the best work, but it is running and you are relieved. A working mess is better than nothing. right? you tell yourself you'll clean it up later but 'later' never comes.

## Average Application lifecycle
- 30% Application Development
- 70% Application Maintenance

## The Element of clean code
- `Clean code is focused`: In a piece of cleanly written code, each class, method, and function are separate and undisturbed by one another. Every object fulfills a single purpose that is entirely encapsulated in its class and all services are narrowly aligned with that purpose.

- `Clean code is non-redundant`: Clean code complies with the DRY rule (Don't repeat yourself). When the DRY is successfully applied throughout a piece of code, modifications of single elements are simple and do not require changes to logically unrelated items.

- `Clean code is pleasant`: Looking through clean code is like reading a well authored reference book -- it's easy to follow and simple to find what you're looking for. This ease comes from following popular programming principles like KISS (Keep It Simple, Stupid) and YAGNI (You Ain't Gonna Need it).

- `Clean code is Easily Extended`: Clean code is written with other developers in mind. The programmer knows that they might not be the maintainer, so the ensure the code is an easy map to follow from future developers

- `Clean code has minimal dependencies`: The minimal dependencies in clean code make it easier to maintain. Classes and methods are short and the code itself is well divided. Clean divisions make reading the code straightforward and simple.

- `Clean code has unit and acceptance tests`: Clean code is tested to ensure it complies with requirements. Being tested means that the code can be maintained and extended without the fear of breaking it.

- `Clean code is expressive`: Clean code has meaningful names that are distinct and express their intensions. This expressiveness makes the code itself a document, which makes the need for separate document less important.

- `Clean code is well thought out`: There are not confusing workarounds in clean code. Developers spend time finding good solutions that keep the language simple and easy to follow.


# Naming 
## Naming general Rules 
- `Reveal intention`: The name of a variable, function or class should tell you three things: Why it exists, what it does, and how it is used. if a name require a comment, then the name does not reveal its intent. e.g.
```javaScript
// The following variable does not reveal intention
const d = 10;

// The following variable does reveal intention
const elapsedTimeInDays = 10;
```

- `Don't be cute`: Choose clarity over humor. Say what you mean, Mean what you say.

- `Searchable names`: Names should be easy to locate across a body of text. if a name occurs in multiple places, it is imperative to give it a search-friendly name. Single-letter names should ONLY be used as local variable inside short methods.

- `Avoid encoding`: Avoid hungarian notation, member prefixes, etc.

- `One word one meaning`: Be consistent throughout your code by using one word per abstract concept. To eliminate confusion, use words that only have one meaning. e.g. it will be un-wise to select multiple names to do the same job at different files like get/fetch/retrieve; controller/manager/driver

- `Meaningful distinctions`: When attempting to differentiate code, make distinctions that are meaningful without changing the searchability or intention of the code. For example, don't change the spelling because the name is already taken (class, klass, or clazz).

- `Use pronounceable names`: It is easier to remember and discuss names that can pronounce For example: `genymdhms` vs `generationTimeStamp`

## Naming coding related rules
### `Length rule`: 
The longer the scope of a function, the shorter its name should be. The longest function names should be given to those function that are called from just one place. Public API functions and classes usually have longer scopes so we should have short and well-defined name assigned to them.
```javascript
// The following code main look good but it breaks name length rule
class AccountDataAccessObject extends BaseDataAccessObject {
  findAccountByIdentifier(accountIdentifier){ ... }
  savePublisherAccountData(accountData){ ... } 
}

// The following code look good too and do not break name length rule
class AccountDAO extends BaseDAO { // AS AccountDAO has longest scope and DAO abbreviation can easily be understood
  findByID(accountID) { ... } // it is short and tell you that this function can find account if account id is supplied
  save(account) { ... } // it is short and tell you that it will save the account 
}
```

Functions that are called locally from a few nearby places should have long descriptive names
```javascript
function getList(targetType) {
  switch(targetType){
    case BLACKLIST:
      return computeBlackListDomainsFromDomainNames(domainNameList, comments);
    case WHITELIST:
      return computeWhileListDomainsFromDomainNames(domainNameList, comments);
  }
}

function computeBlackListDomainsFromDomainNames(domainNames, comments) { ... }
function computeWhileListDomainsFromDomainNames(domainNames, comments) { ... }
```

When it comes to naming variables and parameters it's the inverse of the scope law of methods and classes. The length of the name should correspond to the size of its scope. For example, global variable should have long and self-descriptive names.
```javascript
export const GEO_TARGET_TYPE_COUNTRY = 'Finland';
export const UNKNOWN_TYPE = 'unknown';
export const UNKNOWN_TYPE_NATIVE_SYNONYM = 'other'
```

Local variable of a short method or small block should have short names. Names can be short as single letters; however, these should only be used in certain circumstances:
- Counter variable for simple for loops
- Exception instances in catch blocks
- Arguments of very short functions
```javascript
const len = domainNameList.length;
for(let i = 0; i < len; i++>) { ... }
```

### `Grammar rule`: 
Grammar provides a foundation for readability. It helps ensure that the proper message is being expressed.
- Class and Object Names
  - Use noun phrase names
  - Don't use verbs
- Method Names
  - Use verb phrase names
- Solution Domains : use programming terms such as ( merge sort )
  - Computer science term
  - Algorithm names
  - Design pattern names
- Problem Domains ( sorting of data)
  - Use simple terms that clearly identify the problem
  - Avoid programmer language
### conclusion
Naming is critical part of keeping code clean. Coder user specific rules for naming that support clean coding practices. These rules give expectations related to consistency, clarity and searchability. They also help to define the rules of grammar and proper length of names. Each of these expectations support the overall goal of making code easy to ready, maintain and reuse.



## Reference: 
- [Code story Garage service](https://codingstories.io/story/https:%2F%2Fgitlab.com%2Fcodingstories%2Fgarage-service-story-js?lis_result_sourcedid=course-v1:EPAM%2BCC2.0%2B04_21:elearn.epam.com-25131e97d1c14e2996d1157359257951:3695c092dcf0f9c911e1770e827cdcd6)

# Functions
Function can have different names depending on the coding language being used. The might also be called methods, sub-routines, or procedures.

## Function should be small
Function should be small -- you have heard that before. "Small" is subjective, though, and it means different things to different people. So, how small is "small?".

Attempts to standardize function size started in the 1980s. Programmer were encourage to fit their functions withing a single screen. which was around 24 lines. Fast forward today, where monitors are larger and font-size is adjustable, a programmer can easly fit 100+ lines on a single screen. The "screen size" did not age well, but what about a 24-line standard?

Robert C. Martin, renowned software engineer and author of several books on software development, suggests functions should be fewer than 20 lines.

> "The fist rule of function is that they should be small. The second rule of functions is that they should be smaller than that. Function should not be 100 lines long. Function should hardly every be 20 lines long." - ROBERT C. MARTIN, CLEAN CODE

An 18-line function is obviously cleaner than one with 80 lines, but is it small enough? it depends.

You can do a quick assessment of a function by asking the following questions

- Is it easy to read?
- Can you easily navigate the flow of the program?
- Does it adhere to the DRY (do not repeat yourself) principle?
- Is it easy to test?

## impact on blocks and indenting
If you are going to be a successful in writing small functions, you need to understand how blocks and indents are going to be impacted.

Blocks within "if" statement, "else" statements, and while statements, for example, should only be one line. That line could be a function call.

Additionally, a five-line function is incapable of holding a nested structure, so the indent level shouldn't exceed one or two. That means your function can only do one thing and that is the next guideline.

One way to double-check that your function is only doing one thing is to start extracting. If you can extract another function, your function is doing more than one thing.

## Function should have one level of abstraction
Code that does one thing does not have mixed levels of abstraction. 

It should read as top-down narrative where every function is followed by those at the next level of abstraction. Robert C. Martin calls this "The Stepdown Rule"

### The following code is violate one level of abstraction rule
- A loop which acts upon the whole result set
- A loop body which converts a single entity to a DTO.
```javascript
function buildResult(resultSet) {
  const result = [];
  for(let entity of resultSet) {
    const dto = new PersonDto();
    dto.setName(entity.getName());
    dto.setGender(entity.getGender());
    dto.setAge(computeAage(entity.getBirthday()));
    result.push(dto);
  }
  return result;
}
```
### The following code is the correct version of above function which complies with level of abstraction rule
```javascript
function buildResult(resultSet) {
  const result = [];
  for(let entity of resultSet) {
    result.push(convertToDTO(entity));
  }
  return result;
}

function convertToDTO(entity) {
  const dto = new PersonDto();
  dto.setName(entity.getName());
  dto.setGender(entity.getGender());
  dto.setAge(computeAage(entity.getBirthday()));
  return dto;
}
```

## Functions Should be a command or a query -- not both
Command-Query Separation is a principle that state function should either "do" something, a command, or "answer" something, a query. If your function is changing the state of an object and returning information about that object -- that can be confusing.

The solution is to separate the command from query, by creating two functions from the original function.

### The following function leads to odd statements like you see. This function is being used in a condition expression and that can be very confusing to reads.
```javascript
function set(attribute, value){ ... }

if(set('user', 'guest'))
```

### The following code is the solution of above code
```javascript
function attributeExists(attribute) { ... }
function setAttribute(attribute, value) { ... }

if(attributeExists('user')) {
  setAttribute('user', 'guest')
}
```

## Function should have descriptive names
Do not forget that your code should tell a good stories and good stories use descriptive words -- or names in this case. The function nae should clearly describe exactly what the function does.

You are not stuck with the first name you choose. Feel free to experiment with different names and read through your code before you make a final decision.

Choosing descriptive names will help clarify the design of the module in your own mind and will enhance the storytelling. Remember, though consistency is key.

