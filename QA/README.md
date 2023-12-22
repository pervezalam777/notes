## **Test Plan**

A test plan is a detailed document outlining the scope of testing, required resources, and a complete timeline of testing activities. A test plan can include multiple test suites and test cases.

## **Test Suite**

A test suite is a collection of several test cases used to verify specific functionality. Multiple test suites may share a test case, but the overall purpose of each test suite is different. Test suites may also pertain to specific types of testing, such as:

- `sanity testing`: determines if modifications to code have fixed issues without introducing new ones
- `smoke testing`: verifies if basic functionalities work or not
- `regression testing`: ensures that changes haven’t broken existing functionality
- `UI testing`: replicates how a user interacts with an application and checks all the system layers
- `performance testing`: determines how a system performs under a particular workload
- `API testing`: checks the functionality, reliability, performance, and security of APIs

## **Test Case**

A test case comprises the steps used to verify that a specific piece of functionality works correctly and meets the project requirements. A single test case can be organized into one or more test suites.

## Benefits of Test case management
Intentional test case management can:

- Decrease duplication of test cases
- Provide a standard for quality test cases
- Centralize test case metrics and reports for ease of tracking and reviewing
- Provide a history of test changes
- Help your team verify test completion
- Provide documents and information to efficiently onboard new testers and team members

## Risk from Absent of poor test case management
Absent or poor test case management on a project can result in:

- Poor quality test cases (e.g., test case duplication, inconsistency, lack of test case review)
- Wasted time spent re-creating test cases
- Hard-to-follow test cases
- Difficulty collecting statistics for metrics and reports
- Inability to generate a test case change history
- Incomplete testing or lack of proof that testing was completed
- Confusion and inefficiency because team members do not know which tests have passed or failed and what still needs to be tested

## Good Test case Structure
- Test scenario id:
- Test Title:
- Test case description:
- Test case ID: 
- Test Priority: As per business need (functional: high/medium, UI: low)
- Pre-requisites:
- Post-requisites:
- Test Execution steps
  - S.No
  - Action
  - Test Data
  - Expected Result
  - Environment Information
  - Test comments
  - Requirement Id
  - Defect Id
  - Type of test: (manual/automated)


## Error
When a developer causes a problem or makes a mistake, it’s an error.

Errors are mistakes made by a developer while writing code, including any possible misunderstandings of the intended functionality or requirements of the request.

## Defect
When the software is experiencing a gap between expected and actual results, it’s a defect.

A defect, also known as a bug or fault, happens when the code does not produce an expected result in alignment with product specifications or requirements.

## Failure
When the system has a problem, it’s a failure.

A failure means that the application is not functioning or is unable to function as developers or clients intended.

# Defect classification
## Priority
Priority, or the order in which bugs should be addressed, typically consists of four categories, including:

- `Low`: The defect is a burden, but it can be fixed once a more severe defect has been addressed.
- `Medium`: The defect should be fixed over the course of normal software development activities as it does not hinder application functionality. If the stakeholders approve, such a defect can be fixed before the next release or later.
- `High`: The defect must be fixed as soon as possible as it significantly hinders system functionality. Such a defect could severely damage a customer's reputation—for example, typos in a logo.
- `Critical`: A defect shuts down the entire system or functionality, and further testing becomes impossible until the defect is fixed.

## Severity
Severity refers to the amount of damage a defect is inflicting on the system or user experience. It can also imply the level of effort required to mitigate the bug. The categories of severity may vary in name or number, but they usually include:

- `Trivial`: The defect does not cause any system malfunctions.
- `Minor` (Moderate): The defect causes certain undesired system behaviors, but the system still functions.
- `Major`: The defect is significant and causes the system to collapse. However, certain elements of the system still function.
- `Critical`: The defect causes the system to shut down completely.
- `Blocker`: The defect is so severe that it causes the system to shut down completely and prevents any further testing activities.


## Defect submission best practices
Follow these best practices to submit a defect ticket.

`Have a clearly specified Bug Number`: Include the unique defect ID.

`Show how to reproduce the issue`: Include important details such as: 
  - Environment description and execution conditions (e.g., screen resolution, device description, browser version, execution time).
  - Defect reproduction steps.
  - Actual result description.
  - Expected result description.
  - Be specific: Include priority, severity, status, and assigned personnel.
  - Add evidence: Include screenshots, video records, logs, and other useful information.

## Root cause analyses
The five steps of root cause analysis include:

- Forming a team to conduct root cause analysis
- Defining the problem
- Determining the root cause of the defect
- Taking action to address the root cause of the defect
- Preventing continued occurrences of the root cause of the defect

### common root cause defects
**`Human-Introduced Defect`**
Defects can be caused by people, resulting from:

- A low level of skills
- Improperly followed instructions
- An unnecessary execution of an operation
- Intentional damage
- User error (a user incorrectly performing a sequence of actions or performing unnecessary operations)

**`Organization Confusion`**
Defects can result from improper decisions by management teams, such as:

- Vague instructions that team leaders give to team members
- Poor task assignments
- Absence of monitoring tools for quality assessment
- Poorly constructed testing environments

**`Mechanical Problem`**
Defects can result from the failure of any physical device or system, such as:

- Computer shutdown (e.g., if a computer shuts down while you’re uploading, turning the computer back on and launching this application can cause a crash)
- Server turn-off (if the client-server application is down on the client side, you won’t be able to get data)
- System failure

# Non-functional testing
## Benefits of non-functional testing
Non-functional tests can bring a lot of benefits to a project, such as:

- Increasing the security of the product
- Improving the performance of the system
- Improving the user experience and ease of operating the software
- Helping to establish whether a new version is ready for production
- Allowing stakeholders to understand a solution’s actual performance compared to their expectations

## Impacts of neglecting non-functional testing
Without non-functional testing, a system might suffer from issues, such as:

- Running slowly or becoming unresponsive while several users use it simultaneously
- Becoming unavailable when it is required most, resulting in a direct impact on business
- Having inconsistencies across different operating systems
- Providing poor usability that frustrates users

Issues with the system can result in serious consequences that include:

- Losing valuable data
- Breaking the security of confidential data
- Generating incorrect reporting that breaks the law and results in a financial penalty for your company or client


|Parameter|Functional Testing| Non-Functional Testing|
|------------|------------|----------|
|Functionality|	Verifies what the product does	|Verifies how the product works|
|Execution|	Is performed before non-functional testing|	Is performed after functional testing|
|Focus area| Is based on customers’ requirements|	Focuses on customers’ expectations|
|Manual testing|	Can be executed either manually or using automation tools|	Is preferably performed using automation tools|
|Example Requirements to Test|-A login page must show text boxes to enter a username and password.<br/>-The search function in the application should not be case sensitive.<br/>-A verification email is sent to a user whenever he/she registers for the first time.|-The dashboard should load in 2 seconds.<br/>-Software should be installable on all versions of Windows and Mac.<br />-The GUI should provide help and tooltips to make it easy to use.|

```Since non-functional requirements often relate to subjective areas like compatibility and usability, it is helpful to translate each non-functional requirement into some measurable, quantifiable property of the final product. Otherwise, a client can always claim that the product your team delivers is not good enough.```

## Type of non-functional test
### Compatibility
What are the minimum hardware requirements? what operating systems(including versions) must be supported?

### Performance
How quick is the response to a user's action? How much time does a user wait for a specific operation to happen?

### Capacity
What is the minimum number of users allowed to use the application simultaneously-- for example on Black fried? Is the user experience compromised at this time?

### Security
Is every endpoint adequately secured? Does every endpoint require an authentication? Is confidential data, such as the last names of end users, shared in response?

### Reliability and Availability
How often do critical failure happen to the system? Do users need round-the-clock access to the system

### Scalability
Is your system able to handle the growing amount of users by adding extra resources (e.g. servers, storage, memory) to it?

## Maintainability and Manageability
How long does it take to fix components? How easily can an administrator service the system? how easy is it to improve performance and adapt to a new operating system?

## Usability
What determines the user's satisfaction with the product? How easy is it to user the application? Is your site easy to navigate? Does the user understand the primary purpose of the application?

## Accessibility
Could people with visual impairments or color blindness use the application? Can users with impaired mobility navigate the system with a keyboard? Will people with cognitive disabilities, or those who are deaf or hard-of-hearing, have full access to the content? Does the application meet all legal requirements for accessibility?

This list of non-functional testing types is not exhaustive. There are more than 150 other types, including `portability` and `localization`. All of them place different quality constraints on a system’s components. That is why it is important to identify which specific non-functional characteristics of a product are critical to test.

# Report and Analyze Phase
|Metric|	Measurement|	Target|
|------|-------------|--------|
|Defect Containment Efficiency|	Determines how effective quality testing and defects detection are at keeping defects contained|	>95%
|Number of Open Defects|	Measures product quality and quality debt|	Trend not growing
|Test Coverage|	Determines completeness of test suite and how many requirements are covered by test cases	|100%
|Defects Density|	Determines development quality	|Trend not growing
|Invalid Defect Ratio|	Determines waste due to invalid defects|	<10%
|Defect Reopen Ratio|	Determines waste due to reopened defects|	<10%
|Defects Age (by Priority)|	Measures project quality and the health of project processes|	Top Priority: <3 d<br/>All Priorities: <30 d
|Cost of Poor Quality|	Measures effort spent on fixing bugs|	<15%|

A `deterministic` test fails or passes every time it runs for the same revision of code. A `flaky` test fails or passes randomly for the same configuration without any code changes. This behaviour is harmful because flaky test failures require teams to investigate the root cause, but they do not necessarily indicate bugs in the code.


## Best Practices for Automated Testing
- Make test automation an essential part of your test strategy.
- Make sure in-sprint regression test automation is implemented and executed―sprint items are fully covered by test automation.
- Ensure test automation code follows the same strict coding standards as production code.
- Execute and analyze all test automation suites at least weekly.
- Include automated smoke tests as a quality gate in the CI/CD pipeline: smoke tests must be executed automatically for each deployment and break the CI/CD pipeline in case of failure.
- Execute and analyze a regression test automation suite daily.
- Use a dedicated environment to execute test automation during CI/CD.
- Track defects reported by test automation.
- Use production-like data to create test automation data.
- Use the Testing Pyramid approach to balance a portfolio of automated tests.
- Review and update the Testing Pyramid regularly.

# Ref
- [software testing anti pattern](https://blog.codepipes.com/testing/software-testing-antipatterns.html)