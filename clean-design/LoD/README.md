# Law of Demeter


## Conclusion
- Function F of an objet O may only call function of the next objects:
  - O itself
  - F's parameters
  - Any object instantiated within F
  - O's direct components objects
  - Global vars, accessible by O in the scope of F.
- Dividing a chain into the variables is not always an option. The LoD is not about eliminating chaining methods; it is about restricting the number of interactions between non-related units to implement low coupling.
- Using creational pattern is equivalent to the creation of an object with a "new" keyword (so it does not violate LoD)
