# Code commit guideline
Following code commit guidelines is one of the essential process for a project development team and a must for every developer. 

The metadata related to your committed code, not only helps you in organizing your commits better but also provide relevant information regarding the purpose of your committed code to your team and supervisors.

Adding proper comments to your code while pushing the same to a repository is one of the major factors for code commit guidelines. The metadata holds all the necessary information for the committed code as outlined below: 

**type:** feature/bug/merge/patch/configuration <br/>
**id:** feature_id/bug_id/patch_fix_id/merge <br/>
**keyword:** keywords related to *type* <br/>
**description:** brief information about the committed code <br/>
**link:** reported bug link or user story link <br/>
**ots:** name of the peer who reviewed this code <br/>
**platform:** name of platform where code was executed and tested before commit. e.g. chrome browser <br/>
**test_case:** number of new test cases added <br/>
**comments_for_tester:** any specific scenario that tester should pay attention to. e.g. impacted module login and dashboard

## Types of commit

### Feature development commits **keywords**
* folder_structure
* configuration
* unstable_commit
* stable_commit
* acceptance_criteria_completed
* completed
* feature_bug_fixes

### Merge branch commits **keywords**
* feature_branch_merge_*branch_name*
* patch_branch_merge_*patch_branch_name*
* master_branch_merge_to_*branch_name*

### Quality testing team reported bug fix commits **keywords**
* ui_bug_fixed
* functionality_bug_fixed
* enhancement_as_bug_fixed
* requirement_mismatch_bug_fixed

### Patch fixes **keywords**
* customer_reported_bug_fixed
* system_reported_production_bug_fixed

### configuration **keywords**
* deployment_configuration_added
* production_configuration_changed


### Git Commit with editor
```bash
> git commit -e

## ----- in Editor
"
type: bug 
id: 32011
keyword: functional_bug
description: Resolution for managing HTTP 400 error.
link: https//bug.com/32011
ots: Vijay
platform: chrome browser version 78.
test_case: unit test cases added for bad request, in service and ui layer
comments_for_tester: This cannot be tested in an ideal scenario. To replicate the defect, there should be a mismatch between the earlier API present in the deployed system and the updated API present in the server. In case of an error scenario please refer user-story 299.
"
```

### Usage
AI based future ready softwares are utilizing metadata information of your committed code to analyse and generate understanding of various code metrics like defects reported in the code, code health and various other code related factors.

### Reference
* [GIT book](https://git-scm.com/book/en/v2)
* [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
* [Applying machine learning to software development to reduce bugs](https://www.youtube.com/watch?v=9p45yAX-QXA)