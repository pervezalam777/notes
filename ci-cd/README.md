# CI/CD
CI/CD combines two major practices--continuous integration (CI) and continuous delivery/continuous deployment (CD). Together, they form an approach to developing and updating software in which repeatable actions are automated, and human decision-making is excluded as much as possible to minimize errors and tedious processes.

`Continuous integration` means that “members of a team integrate their work frequently” (Fowler) by “collaborating on a shared codebase, merging disparate code changes into a version control system (VCS), and automatically creating and testing builds” (Nemeth).

`Continuous delivery` means that “the software can be released to production at any time” (Fowler) by “automatically deploying builds to nonproduction environments after the continuous integration process completes” (Nemeth).

Though the term is sometimes used interchangeably with continuous delivery, `continuous deployment` takes things one step further, meaning every change “automatically gets put into production” (Fowler) “without any operator intervention” (Nemeth).

## Continuous integration
Continuous integration requires individual developers working on the same code to continually commit their code branches to a shared repository, where they are merged into the main build. Automated testing verifies that nothing breaks with each merge; when issues arise, they are immediately spotted and resolved. With CI, teams agree on how frequently to commit code—with practices ranging from several times a day to as often as possible—and the status of the current build is made transparent to every team member.

## Continuos deliver
CD most often refers to continuous delivery: the assurance that every change committed is ready to go to production. Each integrated and validated build is automatically deployed to a staging environment in preparation for release; final deployment to production still requires human approval but then is carried out by tools. Continuous delivery puts the release schedule in the hands of the business instead of IT. With continuous delivery, any build can potentially be released to end users by clicking a button to trigger automated deployment in a matter of seconds or minutes.

## Continuous deployment
CD can also refer to continuous deployment. With continuous deployment, once the integrated build passes all automated quality tests, it is automatically deployed directly to production. The decision to go live becomes a technical one. The lack of human intervention at the deployment stage means automated testing must be of the highest quality. Continuous deployment is not an essential practice for every project, but it is especially beneficial for large organizations, such as Amazon, that release software daily.

# The CI/CD Pipeline
The CI/CD pipeline is a series of stages that run in a sequence. When a developer pushes code to the `feature branch`, it automatically triggers the pipeline execution. On the feature branch, only the CI part is executed. Once the developer merges the feature branch into the mainline branch, the full CI/CD pipeline is executed. 

The CI pipeline includes three major stages: `Build`, `Unit Testing`, and `Static Code Analysis`

The CD pipeline includes four essential stages: `Deploy to QA`, `Automated Testing`, `Deploy to Staging`, and `Deploy to Production`.

# Continuous Deliver
**Deployment to QA**
This stage includes two steps. First, the build is published to the artifact repository. Then it is deployed from the artifact repository to the QA environment so that the QA team can conduct testing activities.

**Automated Testing**
During this stage, all other types of automated tests are executed against the build on the QA environment. For example:

  - Integration tests
  - Regression tests
  - UI tests

**Deployment to Staging**
The same artifact that was deployed to the QA environment is deployed to the staging environment from the artifact repository. Usually, a development team manually initiates deployment to staging once a QA team is satisfied with the quality of the product. Deployment to staging is needed for the business users/clients to verify the product. This stage might also include the following processes:

  - Collecting metrics of the application performance, latency
  - Sending metrics to the monitoring systems
  - Sending logs to the logging system
  - Scanning logs for errors
  - Comparing metrics with goal performance

**Deployment to Production**
Deploying to production is initiated manually once the client is satisfied with the quality of the release. This stage might also include the same processes as deploying to staging.

# The Benefits of CI/CD
## Faster Feedback, Fewer Errors
CI/CD is designed to yield feedback as quickly as possible, ideally within minutes after pushing code to the VCS. This rapid response guarantees that developers pay attention to the result and that they can fix any problems quickly because the changes they just committed will be fresh in their minds. Faster feedback and fewer errors mean less downtime.

## Less Manual Effort
With automated tests that can find issues in each integration, CI helps eliminate the problem of comparing and merging blocks of code that diverge from the main branch over a long period—a necessary but tedious task in the traditional software release cycle.

CD removes all human intervention from a continuous flow to the production environment. Automation eliminates manual tasks and allows developers to focus on developing software.

## Faster Root Cause Identification
CI/CD makes the processes of testing and deploying transparent. All developers can see which commits are included in each build, issues are visible almost immediately, and developers can quickly find the source of the problem (or which code change introduces the issue). This reduces the guesswork in identifying the root cause of any problems and holds developers accountable. The developer who worked on a section of code with problems is typically the best person to resolve them.

## Faster Time-to-Market
CI/CD encompasses the tools and processes needed to facilitate frequent, incremental software and configuration updates. It facilitates rolling out well-tested features in minutes or hours, rather than days or weeks.

## Actionable Visibility
The CI/CD system—which includes both the practices and their implementation with appropriate tools—enables visibility inside the pipeline at every stage of the release cycle, giving stakeholders and managers the awareness required to make better decisions and meet goals efficiently. They can easily identify code changes in the pipeline, understand the current status of those changes, and determine which activities have happened—or are happening—within the CI/CD pipeline.

## More Auditability
The CI/CD system includes a detailed history of every software release, including its progression from development to production. This auditability ensures that the code passed all security checks and only authorized builds are deployed. The event timelines related to each environment can be verified.

# Cloud financial operations (Cloud FinOps)
A developing discipline and practice that enables organizations to maximize commercial value by helping engineering, finance, and business teams collaborate on cloud financial management.

Best practices while developing in the cloud.
## Terminate resources you don't use
Terminate resources you no longer need or shut them down temporarily if they are not currently being used. Such resources could be a virtual machine you once spun up to validate your ideas or development environments you're not using while on an extended vacation.

## Use Discounts
Agree with the client to take advantage of cloud provider discounts. For example, a virtual machine that is prepaid for three years may be several times less expensive than a regular instance. Demonstrating a commitment to the cloud provider helps you get the instance at a better price.

## Use resources optimally
Before spinning up a resource, think about how much you will use it. For example, using only 10% of a virtual machine's or database's capacity may not be the best choice. The rule of thumb is that the size of a resource should correspond to its load.

## Upgrade resources
From time to time, cloud providers come up with new types of virtual machines or storages that are more efficient and less expensive than the previous ones—so-called resource generation. Try to keep your resources up to date to maximize efficiency and save costs.


# Cloud service models
There are three types of service model -- `Infrastructure-as-a-Service (IaaS)`, `Platform-as-a-Service (PaaS)`, and `Software-as-a-Service (SaaS)`

## Infrastructure as a Service (IaaS)
Enabled by virtualization, Infrastructure-as-a-Service is a foundation of all cloud service models. This layer provides on-demand services, such as virtual machines and software defined networks to form the basic cloud infrastructure and run applications.

**Benefit**
  - Autoscaling — projects with continuously changing capacity requirements can scale the size of a fleet up or down. For example, a team can use maximum capacity when a system is loaded critically (e.g., on Black Friday) or minimum when the capacity is not needed. You can configure autoscaling rules through infrastructure management tools.

**Drawback**
  - Maintenance — Teams opting to run solely on an IaaS service model must have access to the network or system architects and the system engineering team, who will be deeply involved in designing and maintaining the application's architecture.

**When to Use IaaS**
  - When teams have the capacity and competency to manage the cloud themselves and avoid spending time and money on purchasing hardware.

## Platform as a Service (PaaS)
A Platform-as-a-Service model runs on top of the IaaS layer and provides necessary components, such as an operating system (OS), runtime environment, middleware, and a database. By leveraging these services from providers rather than developing and administrating them in-house, your team can focus on adding functionality that contributes to business value.

**Benefits**

  - `Costs` — PaaS can significantly reduce costs since your team can use an existing platform.
  - `Availability and customization` — Your team can simplify some challenges that come up if you are rapidly developing or deploying an app because PaaS solutions are highly available (i.e., they are always ready and will always work for end users). As a result, PaaS allows for any customizations necessary for a particular project.
  - `Simplicity` — PaaS solutions allow simple and cost-effective development and deployment of applications.

**Drawbacks**

  - `Security` — Your application and services data are stored in the vendor-controlled cloud servers, which poses security risks.
  - `Vendor lock-in` — You may have difficulties in migrating to alternative PaaS solutions in the future.

**When to Use PaaS**

  - When multiple teams and vendors need to collaborate on a project and the project doesn’t need access to OS-level customization or to installing custom hardware.

## Software as a Service
A Software-as-a-Service model delivers an entire software stack to the users who typically pay for the subscription. The SaaS provider is 100% responsible for managing system updates, monitoring security, and handling any other tasks, so your team can have no worries about application coding or infrastructure hosting. Examples of SaaS products are Microsoft Office 365 or SalesForce.

**Benefit**

  - Outsourcing — SaaS is a wise decision when a full-featured, well-maintained software that meets the needs of your project is available.

**Drawbacks**

  - Vendor lock-in—You may have difficulties in migrating to alternative SaaS solutions in future.
  - Lack of customization—Because SaaS solutions cannot be customized, they cannot cover all needs of big projects. However, you can use them for certain parts of a project as long as you ensure that:
    - an offering provides the required functionality
    - all users and other applications can access software securely
    - there are no objections to having an outside organization owning the cloud features and enhancements

**When to Use SaaS**
  
  - When teams need to launch a standardized application quickly and don’t want to waste time creating software with the functionality they can obtain via subscription.

## Services Managed by a Provider
|Services         | IaaS  | PaaS  | SaaS  |
|-----------------|-------|-------|-------|
|Virtualization   |Yes    |Yes    |Yes    |
|Servers          |Yes    |Yes    |Yes    |
|Storage          |Yes    |Yes    |Yes    |
|Networking       |Yes    |Yes    |Yes    |
|Runtime          |No     |Yes    |Yes    |
|Middleware       |No     |Yes    |Yes    |
|Operating System |No     |Yes    |Yes    |
|Applications     |No     |No     |Yes    |
|Data             |No     |No     |Yes    |


# Approaches to Infrastructure Management
Today, most projects use virtual or cloud infrastructure and a vast number of operating servers. Since server rental costs are high, teams require the flexibility to launch and terminate servers to handle capacity needs. Thoughtful infrastructure management can help your team to manage assets quickly and effectively, optimize load, avoid mistakes, and reduce operating costs.

Your team can choose from two infrastructure management approaches for a project — manual or automatic.

## Manual
With a manual approach, engineers configure infrastructure through a web UI, such as:
  - AWS Management Console
  - Google Cloud Console
  - Microsoft Azure Portal
It requires a lot of time and special skills since each web console has a vast number of unique functions.

## Automatic
An automatic approach for infrastructure management is called Infrastructure as Code (IaC). With an automatic approach, an infrastructure management system configures the infrastructure itself. There are two types of automatic approaches: `imperative` and `declarative`.

With the `imperative approach`, system engineers create a sequence of specific commands, focusing on how they should change the infrastructure.

With the `declarative approach`, system engineers focus on what the eventual target configuration should be, and the system itself makes changes required to achieve that desired state. Compared to the imperative approach, the declarative approach requires less time and effort to configure the infrastructure. Therefore, teams that use IaC usually opt for the declarative approach.

# Infrastructure as Code (IaC)
IaC allows your team to automatically manage the creation, deletion, and life cycle of a particular resource in the infrastructure system. You can also save versions of project infrastructure and recreate them from ready-made templates.

```
Managing and configuring computer data centers through machine-readable definition files instead of configuring them manually or using interactive configuration tools.
```

- Source code and Infrastructure as code both store on version control system
- CI server does the following job on commit to main branch in VCS
  - Build Source Code
  - Use Infrastructure Management tool to create environment and placed build application on that

## Benefits of IaC
- `Configuration drift detection` An infrastructure management tool checks whether the current system infrastructure is the same as the IT infrastructure model. If someone makes changes manually instead of using the IaC approach, the system will detect the configuration drift.
- `Predictability of changes` You can review planned changes in the infrastructure before the system implements them.
- `Documented inventory` Your team can examine all existing assets in one place instead of reviewing several sections in the web console. The infrastructure code itself also explains the infrastructure management process, so you don’t need to write additional documentation.
- `Modularity` You can partition system infrastructure and manage pieces separately.
- `Strong community support` Widely used open-source tools have numerous modules and parts of code already written by other community members. As a result, you can significantly reduce time on configuring the infrastructure.

## Drawbacks of IaC
- `Difficult migration` You can easily manage virtual machines if you use IaC from the beginning of a project. However, you are likely to face challenges in transitioning to IaC for existing legacy resources.
- `Barriers to entry` Your team will need time and expertise in framework and code development to initially create and configure a system using IaC.
- `No edge use cases support` Even with IaC, you will need to use the web console from time to time for occasional but specific tasks.

# Infrastructure Management Tools
two management tool types: `single-cloud` and `multi-cloud`.
## Single-cloud
Single-cloud tools work with a particular cloud. Although all single-cloud management tools use .json/.yaml file format, they are not interoperable. An engineer needs to know each cloud domain’s specific language.

Examples:
- AWS (Amazon Web Services) CloudFormation
- GCP (Google Cloud Platform) Deployment Management
- Azure Resource Manager

## Multi-cloud
By contrast, multi-cloud tools enable configuring any cloud using a single framework language. These open-source tools allow teams to manage all multi-cloud infrastructure in one place.

Examples:
- Terraform
- Pulumi
- Puppet
- Chef

# Terraform
Many engineering teams use Terraform to manage infrastructure among open-source tools. It is usually used for managing public clouds.
```
Many engineering teams use Terraform to manage infrastructure among open-source tools. It is usually used for managing public clouds.
```

- `Multifunctional`: Terraform can manage both low-level and high-level infrastructure components. Your team can configure instances, storage, and networking, as well as IaaS and PaaS features.
- `Universal`: Terraform utilizes a universal programming language that allows your team to work with any cloud you need. Instead of learning multiple vendor-specific languages, you can study a universal programming language and use it for all clouds.
- `Predictable`: Terraform enables you to change infrastructure safely and predictably because you can review the suggested changes before applying them. The tool also creates incremental execution plans, which can be applied after you make the initial changes.
- `Collaborative`: Terraform files can be shared among team members and treated as code, so other engineers can review and make changes to them.

# References 
- [`Travis CI | Javascript with nodejs`](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)
- [Continuous integration - Martin Flower](https://www.martinfowler.com/articles/continuousIntegration.html#:~:text=Continuous%20Integration%20is%20a%20software,to%20multiple%20integrations%20per%20day.)
- [Continuous Delivery - Martin flower](https://martinfowler.com/bliki/ContinuousDelivery.html)
- [
UNIX and Linux System Administration Handbook, 5th Edition](https://www.oreilly.com/library/view/unix-and-linux/9780134278308/)
- [Terraform Cloud: tutorial](https://developer.hashicorp.com/terraform/tutorials)
- [Infrastructure as code: AWS](https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html)
- [Infrastructure as code: Microsoft](https://learn.microsoft.com/en-us/devops/deliver/what-is-infrastructure-as-code)
- [Infrastructure as code: YouTube](https://www.youtube.com/watch?v=POPP2WTJ8es)
- [Infrastructure as code: RedHat](https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac)


# Notes:
- Source code from the repository is compiled into a new build called an “artifact.”