

## Estimation
Estimation is a essential part for the software development and it also drive and decide the timeline and cost of the application. Estimation can be divided in to two parts high level estimation and low level estimation. After each type of estimations delivery timeline has to be decided 

### High Level estimations
While working on this type of estimation, you may have to think about epic user stories (or Numbers of feature an application require) in order to get it ready for first launch. Client may ask for multiple phases of the application but all the requirement has to given in the RFP (Request For Proposal)

The following are the main key points that has to be considered.
* Authentication : what all type of authentication would the system support
* Authorization : what are the different type of users and what they can access.
* Epic user stories acceptance criteria has to be discussed with client
* Infra setup requirement should be discussed (Development, UAT(staging), and Production)
* Infra provider (as most of the client now start with cloud application). This can be discussed while starting the project but it has to be finalized. each cloud provider have subtle differences while setting up could formation.

> This type of estimation considered as ballpark estimation. It can be on higher side since all the minute level details are not considered.

#### Team Involved
* Business Analyst and client : Who has understanding of requirement
* A manager: It could be the one at Director level or the one who will engage with client for deliveries, timelines and etc
* Software Architect(s): It could be one or many based on their specialties e.g. Fullstack, Frontend, backend, and cloud architect

#### estimation formula
```javascript
var features = [
    {
        name:"feature name",
        description:"feature description",
        acceptance: [
            {
                criteria: "What is required",
                complexity: "low/medium/high",
                developmentDays:12
                overheads: developmentDays * 0.3 //unit testing
                testingDays: 4 // include test case document
                management: (developmentDays + overheads + testingDays) * 0.2
            },
            {
                criteria: "What is required",
                complexity: "low/medium/high",
                developmentDays:12
                overheads: developmentDays * 0.3 //unit testing
                testingDays: 4 // include test case document
                management: (developmentDays + overheads + testingDays) * 0.2
            }
        ]
    }
]



```

### Low level estimations 
While working of this type of estimation. Epic user stories divided into small user stories which should not take more then a week for development.


#### Team Involved
* Software Architect(s)
* Tech lead(s) or Team Lead(s)
* A manager : To track the estimation timeline and communicate back to client

#### Estimation formula
```javascript

var devEnvironmentSetup : {
    subversion: {
        name: "github/git-lab/svn/mercurial/cloud-commit/etc",
        days: 3,
        overheads: days * 0.3
    }
    architecture: {
        frontend: {
            framework:"",
            unitTestFramework:"",
            CITool:"",
            CDTool:"",
            IDE:"",
            days: 5, 
            overheads: days * 0.3
        },
        backend: {
            framework:"",
            unitTestFramework:"",
            CITool:"",
            CDTool:"",
            IDE:"",
            days: 5, 
            overheads: days * 0.3
        },
        DevOps: {
            configuration: "development pipelines"
            frontEndCITool:"",
            frontEndCDTool:"",
            backEndITool:"",
            backEndDTool:"",
            monitoringTool:"",
            logsSystem:""
        },
        managementTools: {
            name:"JIRA/trello/Redmine",
            days: 2,
            overheads: days * 0.3
        }
    }
}

```