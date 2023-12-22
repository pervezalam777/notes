# SSDLC
A better approach is embedding security into the software development life cycle (SDLC) by including security in the scope of developer responsibilities. This methodology is called Secure Software Development Life Cycle (Secure SDLC or SSDLC).

```
Secure SDLC = Methodology + Best Practices + Templates + Tools
```

**`The Risks of Poorly Secured Software`**
When an organization’s security is compromised, it can significantly interrupt critical services. For instance, Ireland’s publicly funded healthcare system, the Health Service Executive (HSE), was targeted in a cyberattack in May 2021. Russian hackers gained access to the HSE’s network and encrypted some data to demand a ransom. Ireland’s government refused to pay the criminals, and hospitals across the country had to cancel appointments, leaving thousands of Irish citizens without access to medical care.

**`Two major data privacy laws protect personal, business, and financial data.`**
- **GDPR**: The General Data Protection Regulation (GDPR) is a regulation in the EU dealing with data protection and privacy. Companies who violate GDPR may face a fine of up to 20 million euros, or up to 4% of their annual global revenue of the last year, whichever is greater.

- **HIPPA**: The Health Insurance Portability and Accountability Act (HIPAA) is a federal law in the United States. The purpose of HIPAA is to protect health care information for employees and customers. Based on the level of negligence, the penalties for companies in violation of HIPAA can be up to 50,000 dollars per violation, or up to 1.5 million dollars per year. Violations can also incur criminal charges that may result in jail time.

# Embedding Security into the SDLC
Shift-Left Security with Secure SDLC means moving security to the earliest possible point in the development process.

# Secure SDLC Phases and Activities
## Training
Core security training at the beginning of SSDLC ensures your project team knows the product’s policies and security requirements. It establishes the guidelines for software development and mitigates the risks of neglecting security issues.
Security training typically consists of:
- Code of conduct and basic security concepts training
- Industry-related training covering standards, industry requirements, and laws
- Technology-specific training covering best practices for the selected frameworks

## Requirements
In this phase, your team gathers security and privacy information and establishes the product’s security requirements.

1. First, analyze `general security` and `privacy-related information`:
    - Business rolesRoles in a product: (for example, support or IT security)
    - Potential attackers and probable attack vectors: (Users interested in hacking the application and the way they will likely hack it)
    - Data sensitivity: (The data sensitivity level that an application processes or stores (for example, confidential, PII, public))
    - Availability
    - Deployment environment
    - Technological stack: (Technologies used for building an application)
    - Points of integration: (External systems integrated with a product)
    - Maintenance and support procedures: (The workflow and frequency of maintenance and support procedures)

2. Then, collect specific requirements:
    - Authentication and authorization
    - Auditing
    - Data validation
    - Communication security
    - Session management
    - Cryptography

3. have a `security champion` perform a `security risk assessment (SRA)` to calculate risks based on the information your team has already gathered. 

4. Finally, your team should also check `compliance` with standards and policies and create `quality gate`s to establish minimum acceptable levels of security and privacy quality.

## Design
In the Design phase, your team establishes design requirements to identify potential issues and make the product secure.

Security-related activities in this phase include:

### Threat modeling
The goal of this activity is to identify, enumerate, and prioritize potential vulnerabilities. Your team can conduct threat modeling based on SRA results, solution architecture, and an access control matrix. As a result, you get:

- Data Flow Diagrams: extensions of architecture views from a security standpoint
- Solution Specific Threats: actual threats with severity

### Mitigations planning
This activity helps your team develop a strategy for effectively mitigating the threats you identified in the previous step.

### Attack surface analysis and reduction
Finally, check the application itself and try to remove unnecessary API endpoints and machines.

Once you complete these activities, your team can move into development with a clear understanding of how to build a secure application.

## Software Development
In the Software Development phase, the writing of the program takes place. Your team should use approved tools and deprecate unsafe functions when you develop software.

Activities in this phase include:

- Code writing based on the threat models, privacy requirements, best practices, and secure code standards and techniques
- Security bug fixing
- Static Application Security Testing (SAST): SAST solutions analyze an application from the inside out in a non-running state. They search source code, byte code, and binaries for coding and design conditions that indicate security vulnerabilities.
- Software Composition Analysis (SCA): SCA solutions identify open-source components, their license compliance data, and outdated and vulnerable product dependencies. As a result, vulnerable open-source components and outdated vulnerabilities can be easily replaced without exposing an application to a threat.
- Regular security code review with the developers and system architects
- Fuzz testing : A software testing technique that involves providing invalid or random data called fuzz into a software system to discover coding errors and security.
- Preparation of security-related documentation

## Testing
After the code is submitted, your team must verify that it is secure in the Testing phase.

To assess the results of the Software Development phase and correspondence with plans created during the Design phase, engineers perform activities such as:

- Threat models and attack surface review
- Security testing (fuzz testing, penetration testing)
- Dynamic Application Security Testing (DAST): DAST tools help identify vulnerabilities of already running web applications. They catch typical vulnerabilities regardless of the application context.
- Bug fixing
- Secure code review and static analysis

## Maintenance
The release of the application doesn’t mean that your team is finished with security. When you deploy the application on the production infrastructure in the Maintenance phase, your team should be mindful of potential security issues in code. Also, keep an eye on security all the time while the software is operating.

Security-related activities to support the Release phase include:

- Infrastructure verification using correct configuration and its topology
- A check to ensure engineers installed application components correctly
- A final security review
- Creation of the incident response plan
- In addition, the team may choose activities from the Testing phase to run in the production environment.

# Maintaining Secure SDLC
Once Secure SDLC is established in your team, you need to maintain this process properly. Specific methods of handling security issues and coordinated teamwork will help to support security throughout a project. With a shared responsibility across team members and a defined process of preventing, detecting, analyzing, and handling issues, your team will reach a sufficient application security level in a short time.

## Prevention
Preventing a cyberattack is better than responding to one. If your team can prevent attackers from gaining access to the system, they won’t have the opportunity to steal sensitive data, cause damage, and cost the company money. A prevention strategy assumes that the system is built securely from the beginning, using instruments such as:

- `Firewalls` : A network security system that monitors and controls incoming/outgoing network traffic based on predetermined security rules.
- `Network Segmentation`: Splitting a computer network into subnetworks for boosting performance and improving security.
- `Identity and Access Management (IAM)`: A framework of policies and technologies for ensuring appropriate and secure access to technology resources.
- `Secrets Management`: Tools and methods for managing digital authentication credentials (passwords, keys, APIs, tokens) in all parts of the IT ecosystem.
- `Secure Storages`: A security area that ensures the security of data storage systems and their assets.
- `Patch Management`: The process of acquiring, testing, and installing multiple patches on existing applications, enabling systems to stay updated and use appropriate patches.

As a result, your team and company can significantly decrease the probability of a successful attack.

## Detection
In recent years, cyberattacks have become more sophisticated, and a prevention strategy alone isn’t enough to safeguard software. As companies use more software and the number of vulnerabilities grows accordingly, it is increasingly difficult to prevent all security risks.

A detection-based cybersecurity strategy considers security breaches as inevitable and suggests actions to minimize their impact and damage. A detection strategy helps your team quickly find and respond to security issues by employing:

- `Web Application Firewall (WAF)`: A system that monitors HTTP traffic and inspects and filters packets based on specific rules. It helps to prevent such attacks as SQLi and XSS.
- `Anti-DDoS systems`: Systems for detecting and preventing both denial-of-service attacks and distributed denial-of-service attacks that come from different sources at once.
- `Security Information and Event Management (SIEM):` A framework of technologies for logging and monitoring security incidents. SIEM provides real-time analysis of security alerts generated by applications and network hardware.
- `Vulnerability assessment tools`
- `Auto-remediation solutions`: Solutions that can remediate vulnerabilities automatically according to the rules set for specific types of findings.
By accepting that attacks pass through defenses and adding detection to your project’s security strategy, your team can make an application more resilient against attacks and save money.

# RACI matrix
- `R-responsible`
- `A-accountable`
- `C-consulted`
- `I-informed`

| Activity                    |	Product/Risk Owner |	Business Analysts | Solution Architect | Developers	| Security Champion |	QAs	| DevSecOps	| Security Testers | Security Advisor |
|-----------------------------|--------------------|--------------------|--------------------|------------|-------------------|-----|-----------|------------------|------------------|
|Security Awareness Trainings	|I	                 |R                   |R                   |R	          |R				          |     |           |                  |I,C               |
|Security Requirements, Risks	|A	                 |R,C	                |R	                 |I	          |R	                |I		|	          |                  |I,C               |
|Threat Modeling	            |I,C	               |I,C	                |A,R	               |I,C	        |R	                |I		|           |I,C	             |I,C               |
|Secure Development			      |                    |                    |R	                 |A,R	        |R				          |     |           |                  |I,C               |
|Security Tests			          |                    |                    |I,C	               |I,C	        |A,R		            |     |R	        |R	               |I,C               |


# Best Practices for Secure SDLC
- Adopt and publish a list of secure coding practices.
- Designate a security champion for each project.
- Establish clear SLAs for fixing security issues.
- Create security quality gates that can stop the release.
- Integrate SAST, DAST, and Composition Analysis tools into CI/CD.
- Ensure that all project team members pass a Secure SDLC training.
- Validate security aspects as part of the code review process.
- Establish a regular manual security/penetration testing practice.
- Create a backlog of security issues in the bug tracking system.

# Glossary
- SDLC: Software Development Life Cycle
- SSDLC: Secure Software Development Life Cycle
- SRA: Security Risk Assessment
- SAST: Static Application Security Testing
- DAST: Dynamic Application Security Testing
- CI/CD: Continuous Integration and Continuous Delivery/deployment
- DevSecOps: A modern approach for organizing CI/CD processes to improve security in SDLC

# Ref
- [OWASP Risk Rating Calculator](https://owasp-risk-rating.com/?vector=(SL:5/M:0/O:0/S:0/ED:3/EE:3/A:4/ID:1/LC:0/LI:0/LAV:0/LAC:0/FD:7/RD:5/NC:5/PV:5))
- [Carrier SAST](https://hub.docker.com/r/getcarrier/sast): Framework to execute various security tools and convert output to common unified format.
- [Carrier DAST](https://hub.docker.com/r/getcarrier/dast): Framework to execute various security tools and convert output to common unified format.
- [OWASP Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)
- [OWASP Proactive Controls: cheat-sheets ](https://cheatsheetseries.owasp.org/IndexProactiveControls.html)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MicroSoft SSDLC](https://www.microsoft.com/en-us/securityengineering/sdl/practices)
