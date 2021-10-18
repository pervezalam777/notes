# Object Vs DataStructure

> “Data structures expose their data and have no meaningful functions.”<br/><br/>
> “Objects hide their data behind abstractions and expose functions that operate on that data.” <br/><br/>
> — Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship

## Conclusion
- Expose data in the most abstract from possible. Be careful with getter and setters.
- Keep in mind that 
  - object make it easy to add new classes without changing existing functions
  - data structures make it easy to add new functions without changing existing data structures.
- Chose either OOP(Object Oriented Programming) or PP(Procedural Programming) design according to system needs and stick to your choice, but do not use hybrids