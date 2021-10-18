# Liskov Substitution Principle
The Liskov Substitution Principle is the third SOLID principle. It extends the second SOLID principle—the OCP—by focusing on the behavior of a supertype—which is a base or parent class—and its subtypes—which are derived or child classes.

`The LSP was named after Barbara Liskov, who first formulated it in 1987.`

 Robert C. Martin made the original theoretical formulation more practical for software development and defined the principle in applied terms.
> "Subtypes must be substitutable for their base types." <br/><br/>
> — Robert C. Martin, Agile Software Development: Principles, Patterns, and Practices

## Substitutability
remember three MUST NOTs when you design child classes
1. Child classes must not — remove behavior of the parent class;
2. Child classes must not — violate invariants of the parent class;
3. Child classes must not — require verification of them being different from their base type

## Invariants
> The LSP is about child classes fulfilling the contract of their parent class. Breaking the defined contract violates the LSP.

## Violating the LSP
Sometimes a logical inference that sounds valid in a natural language is invalid in code because it fails the LSP.

Consider a common example of logical inference:

> If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.

This statement probably sounds reasonable. However, in computer science, this way of reasoning may be invalid. That’s why it is opposed by a well-known counterexample:

> If it looks like a duck and quacks like a duck, but it needs batteries, you probably have the wrong abstraction.

This second statement is a typical illustration of an LSP violation.

## Conclusion
As you apply the LSP to your code ensure that:
- An IS-A relationship is about behavior.
- Child classes do not violate the invariants of their parent class.
- Child classes do not require verification of them being different from their base type. 
- Inherited classes do not break reasonable assumptions of their base class's user.