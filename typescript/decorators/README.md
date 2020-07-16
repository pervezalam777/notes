## Decorators
**Decorator** *provide a way to add both annotation and meta-programming syntax fora class and and members*

## Types of decorator
There are five types of decorators 

1) Class Decorators
2) Method Decorators
3) Accessor Decorators
4) Property Decorators
5) Parameter Decorators

### 1. Class Decorators
A Class Decorator is declared just before a class declaration. 

The following is the basic signature.
```typescript
@logClass 
class {}

//The following is decorator definition 
function logClass(constructor: Function) {
  console.log('class decorator called.')
}
```

### 2. Method Decorators
A Method Decorator is declared just before a method declaration. 

```typescript
class Calculator{

  @logMethod
  add(x, y) { return x + y}
}

//The following is decorator definition 
function logMethod(target: Object, propertyKey: string | symbol, descriptor:PropertyDescriptor): void {
  console.log('method decorator called.')
}
```

### 3. Accessor Decorators 
An Accessor Decorator is declared just before an accessor declaration. 

```typescript
class Point {

  @nonConfigurable
  get x() { return this._x}

}

//The following is decorator definition 
function nonConfigurable(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  descriptor.configurable = value;
  console.log('Accessor decorator called')
}
```

### 4. Property Decorators
A Property Decorator is declared just before a property declaration. 

```typescript
class Greeting {
  @greet
  message:string
}

//The following is decorator definition 
function greet(target: Object, propertyKey:string | symbol):void {
  console.log('Property decorator called')
}
```

### 5. Parameter Decorators
A Parameter Decorator is declared just before a parameter declaration.

```typescript
class Greetings {
  
  greet(@required message:string) {
    console.log(message)
  }
}
//The following is decorator definition 
function required(target: Object, propertyKey: string | symbol, parameterIndex:number): void {
  console.log('Parameter decorator called')
}
```

**Note**: Whenever there is requirement to send some initial data to decorator it requires factory method that wrap the decorator function and return it.

```typescript
class Greet {

  @say('Hello ')
  greet(name:string){
    return name;
  }
}

//The following is the decorator factory example
function say(greeting:string){
  return function(target: Object, propertyKey: string | symbol, descriptor:PropertyDescriptor): void {
    const original = descriptor.value;
    descriptor.value = function(...args:any[]) {
      return greeting + original.apply(this, args)
    }
  }
}
```

### Following is the complete sample of decorators
```typescript

function logClass(message:string):ClassDecorator {
  console.log(`${message} evaluated`);
  return function (constructor: Function): void {
    console.log(`${message} called`);
  }
}

function logProperty(message:string): PropertyDecorator {
  console.log(`${message} evaluated`);
  return function (target: Object, propertyKey:string | symbol):void {
    console.log(`${message} called`);
  }
}

function logMethod(message: string):MethodDecorator {
  console.log(`${message} evaluated`);
  return function(target: Object, propertyKey: string | symbol, descriptor:PropertyDescriptor): void {
    console.log(`${message} called`)
  }
}

function logParameter(message: string):ParameterDecorator {
  console.log(`${message} evaluated`);
  return function(target: Object, propertyKey: string | symbol, parameterIndex:number): void {
    console.log(`${message} called`)
  }
}

@logClass("Class Decorator")
class Person {

  private _directReports: Person[];

  @logProperty("Property Decorator")
  public emailAddress:string;

  constructor(public firstName:string, public lastName:string) {
    this._directReports = [];
  }

  @logMethod("Method Decorator")
  @logMethod("Method Decorator 2")
  public addDirectReport(@logParameter("Parameter Decorator") person:Person) {
    this._directReports.push(person)
  }
}

const person = new Person("Pervez", "alam");

```


## References
* [TypeScript Official documentation on decorator](https://www.typescriptlang.org/docs/handbook/decorators.html)
* [Medium post on TS decorator](https://codeburst.io/decorate-your-code-with-typescript-decorators-5be4a4ffecb4)