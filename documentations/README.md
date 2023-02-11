# README Documentation
README.md file in application is essential for developer to go through to understand the project better before start working on the same. So it should be up-to-date and convey the current understanding of the project

## Testing
- The <PROJECT_NAME> contains test implementation with <LIBRARY_NAMES>. 
- Minimum accepted coverage threshold for the tests to pas <THRESHOLD>% for branches, functions, lines and statements
- Taking the advantages of test beginning of the deployment, the idea is to keep this threshold at <THRESHOLD>% to have all modules working as closest to expected as possible 
- Git hook (husky) automatically setup after installing dependencies. It setup a pre-commit guard to protect untested code to be pushed on git.

## Husky 
- Husky automate the installation and execution of Git hooks.
- Husky would fails the build to commit
  - if any test cases fail
  - if coverage is below the threshold
  - if there is any eslint issue
- Husky can run formatting on files before pushing the code
 