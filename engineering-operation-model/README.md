# Engineering Operation Modal
Engineering operation modal help you to visualize, analyze and design a complex process of software development.

## Visualization of delivery process
## Analysis of delivery process
## Design of delivery process

# Sequence of change in development process
Construction of software product (complex object) is a iterative process. Version control system gives you the best sequential, iterative process history in the form of commit tree. Every commit brings something new to the product - feature, bug fix, optimization or refactoring. In the world of infinite requirement changes driven by inevitable business evolution, software development process must inherently be responsive and flexible. Introduction of a changes with desired functionality and quality is a general problem of software development. 

## Cynefin Framework
Cynefin framework comes to play to explain key concepts behinds our software development analysis approach. It was introduced more than a decade ago by IBM researcher Dave Snowden as conceptual framework which help managers analyze the environment and problems to find the best way to solve them.
### Unordered
* `Complex` (Probe* > Sense > Respond): `Emergent* practice`: the relationship between cause and effect can only be perceived in retrospect
* `Chaotic` (Act > Sense > Respond): `Novel practice`: relationship between cause and effect at systems level.

### Ordered
* **`Simple`** (Sense > Categorize > Respond): `Best Practice`: the relationship between cause and effect is obvious to all
* **`Complicated`** (Sense > Analyze > Respond): `Good Practice`: the relationship between cause and effect requires analysis or some other form of investigation and/or the application of expert knowledge.

## Distribution of testing and feedback loop
Testing activities, in their turn, have a tendency to be distributed across different environments (or stages) to get optimal results depending on the scope and type of testing. Different kind of testing can not be executed on the same environment.
- Code:
  - Compilation
  - Unit testing
- Review
  - Compilation
  - Unit Testing
  - Code Review
- Integration
  - Integration testing
- QA
  - Functional testing
  - Exploratory testing
- Production
  - User feedback

Regardless of distribution across multiple stages, testing activities have one ultimate goal -- to provide feedback on quality of changes. Result of test execution allows us to make decision whether an additional change is required to achieve necessary quality. It creates important control - Feedback loop, allowing self-regulate development process and apply control theory to its analysis.

- `Production issue` causes the `biggest feedback loop` since it goes back to code and need to pass all the testing stages
- `Code review issues` causes the `shortest feedback loop` since it is an next testing activity after code.

# Random Notes

## Complex object
Understanding and discussing complex object is not an easy task. Complexity arise when one object has many elements and their hidden relationship and behaviors with respect to each other. Software product development is also a subject to complex object, to resolve the complexity, it should be divided into small independent unit and put the focus on that at a time.

## Diagram
In software architecture, Diagram helps to represent idea and gives maximum clarity on an given topic to eliminate any misunderstanding.

* **`Deployment diagram`**: represents the `system availability aspect`,
* **`Component diagram`**: represents `interoperability`
* **`Dataflow / sequence diagram`**: represents `inner transactions of data`.

## Result of change
If the introduction of a change with desired functionality and quality is an important problem due to the high complexity of software product, it's almost impossible to be 100% sure if the code change doesn't carry side effects: regression bugs, performance issue, backward compatibility problem could be accidentally added by any given commit.

# Dictionary
* **`Probe`**: An inquiry into unfamiliar or questionable activities
* **`Emergent`**: Occurring unexpectedly and requiring urgent action
* **`perceived`**: To become aware of through the senses
* **`retrospect`**: Contemplation of things past