# Canaria Technologies Automation Challenge

This repo contains a technical challenge for candidates that have progressed past the first interview. Congratulations!

The challenge is not intended to be difficult. If you have any difficulties please contact us to help out.


# Prerequisites

You will need to have an environment ready where you can do some development. Specifically, you will need:
* A GitHub account [Create a GitHub account](https://github.com/join)
* An IDE. VSCode will work, so will WebStorm.
  * [Download Visual Studio Code for free](https://code.visualstudio.com/download)
  * [Download a free trial of WebStorm](https://www.jetbrains.com/webstorm/download/)
* The current LTS version of NodeJS (V14) [Download Node](https://nodejs.org/en/download/)
* The curent version of NPM
  * To update to the current version of npm run `npm install -g npm@latest`
* A git client.
  * [Download Git command line](https://git-scm.com/downloads)
  * [Download GitHub Desktop](https://desktop.github.com/)

    
# Challenge Process

The goal of the challenge is to update an existing repository that does not have any CI/CD to have automatic CI/CD launched on every change to the code.

1. Fork the automation-challenge repo into your own repo (the fork button is at the top right)
1. Add continuous integration with a github action
1. Clone the repo (This is really easy with github desktop, `File->Clone Repository...`)
1. Install the dependencies by running `npm install` in the repo directory
1. Commit the changes (In github desktop, enter a message in the box above description then click `Commit to master`)
1. Push the changes (In github desktop, `push to origin`)
    * This push should launch the CI
    * The CI should fail at this point when running the tests
1. Fix the test and commit and push again
    * This push should launch the CI again
    * The CI should succeed this time
1. Add continuous deployment to github pages
    * You will need to enable github pages in your repo. [This article will guide you through it](https://guides.github.com/features/pages/).
1. Push a change to trigger the deployment (you can just add a newline to a file, such as App.js)
1. Confirm the deployment at github pages

The challenge is not intended to test your ability to use source control or IDEs. If you're struggling with source control or IDEs let us know, so we can help you out.
