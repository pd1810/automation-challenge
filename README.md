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

The goal of the challenge is to update an existing repository that does not have any CI/CD to have automatic CI/CD
launched on every change to the code.

At a high level there are two objectives. First, to add rudimentary CI so that tests are run on every code change.
Second, once CI is in place, to add CD to deploy the build after every successful build. This can be broken down into
the following tasks:

1. Fork the automation-challenge repo into your own repo (the fork button is at the top right of the github UI)
1. Add continuous integration with a github action (this is a Node.js project. If you look in the _package.json_ file
   you will find scripts for start, build and test. The CI needs to run the build and test scripts under Node.js.)
1. Clone the repo that you forked, that is, make a local copy on your computer (This is really easy with github
   desktop, `File->Clone Repository...`. If you cloned before creating the CI script, you can fetch and pull the
   changes using github desktop.)
1. Install the dependencies by running `npm install` in the repo directory
1. Commit the changes, the only change at the moment will be to the file _package-lock.json_ that tracks dependencies
   (In github desktop, enter a message in the box above description then click `Commit to master`)
1. Push the changes (In github desktop, `push origin`)
    * This push should launch the CI
    * The CI should fail at this point when running the tests
1. Fix the test and commit and push again
    * This push should launch the CI again
    * The CI should succeed this time
1. Add continuous deployment to github pages
    * To do so, update the CI/CD script created for the github action to push the build of the web page back to the
      code repository.
    * The exact commands to run to publish the build back to a branch in the repo are ridiculously complicated and
      very difficult to figure out exactly which ones will get the job done just right. For the purpose of this
      exercise, the goal is to figure out where they would go in a CI/CD script so that they will publish the build
      of the webpage. Bonus points for commenting the CI/CD script in such a way that indicates an understanding of
      what the commands are doing.
        ```
        git config user.email "automation@canariatechnologies.com"
        git config user.name "automation"
        git fetch
        git checkout publish || git checkout --orphan publish
        shopt -s extglob
        rm -rf !(".git"|"build") .!(""|"."|"git")
        mv build/* .
        rm -rf build
        git add .
        git commit -m "Publish build"
        git push --set-upstream origin publish
        ```
    * You will need to enable github pages in your repo. You will need to create a branch before you can deploy to
      github pages, which the above script will do. [This article will guide you through enabling github pages](https://guides.github.com/features/pages/).
1. Push a change to trigger the deployment (you can just add a newline to a file, such as App.js)
1. Confirm the deployment at github pages

The challenge is not intended to test your ability to use source control or IDEs. If you're struggling with source
control or IDEs let us know, so we can help you out.
