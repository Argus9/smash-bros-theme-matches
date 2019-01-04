## About the project

smashbrosthemematches.com is a repository of custom rule sets and modifiers for games in the Super Smash Bros. game 
series. Users are welcome to contribute their own rulesets - see the "Contributing" section below for instructions. The
site also acts as a tool to randomly select a ruleset that it is aware of.

## How to contribute (rulesets)

1. Fork this project.
2. Add your ruleset to the `public/data/rulesets.json` file.
3. Create a pull request.

## How to contribute (core)

1. Fork this project.
2. Install dependencies using `npm install` or `yarn install`.
3. Make changes.
4. Ensure good test coverage using automated tests and by manually testing your change.
5. Create a pull request.

The list of contributors can be found [here](https://github.com/paracycle/slackthemes/graphs/contributors).

## Why build in Ember?

Glad you asked!

### But I didn't...

I'm going to explain anyway.

First, it's a framework I'm familiar with, so much so that I feel more comfortable building projects with it than with 
bare-bones HTML, CSS, and Javascript alone, even though it's much simpler.

Secondly, and more importantly, while the project might be fairly simple right now, I would eventually like to build it 
up into something more sophisticated, especially by making it easier for users to submit and manage rulesets. I'll need 
a back-end API to manage that data, and Ember will turn into the frontend framework to be used in that project setup.
