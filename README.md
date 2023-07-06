# Intro to Typescript

## Introduction

Good morning! Today is your lucky day, because I am going to tell you about my favorite programming language, TypeScript.

TypeScript is currently the 5th most commonly used coding language, after only JavaScript, HTML, SQL and Python. In the 2023 Stack Overflow Developer Survey, more than 43% of professional developers said they use TypeScript. ([source](https://survey.stackoverflow.co/2023/#section-most-popular-technologies-programming-scripting-and-markup-languages))

Why do so many teams choose TypeScript? I can't say for certain, but I can say why I personally love it:
TypeScript helps me catch the simple, common errors that can take up a lot of my time, so I can focus on finding actual bugs and solving interesting problems, instead of just looking for typos.

## What Is TypeScript

Sounds great, you say? Sign me up, you say? If you want to use TypeScript, I have some great news for you: you already know most of it.

That’s because TypeScript is a superset of JavaScript. So if JavaScript is your vanilla ice cream, TypeScript is the banana split: it’s just vanilla JavaScript with some additional functionality 
added on top, like whipped cream ... and chocolate sauce ... and sprinkles. 

All your existing JavaScript code will run in TypeScript, but you’ll also have typing tools to help you write more readable and maintainable code and catch errors more quickly.

![Whiteboard Diagram](https://4.bp.blogspot.com/-pYn2LAUvMNQ/WtWXBIT2IRI/AAAAAAAACK8/n9pH7ikTpo4xqIl8odqkJ7kfnbfpcsbxACLcBGAs/s1600/typescript.png)

One part that might seem a little counter-intuitive is that TypeScript can’t run in your browser — it’s compiled back to JavaScript. So its sole purpose is to make the development process easier and more efficient; but at runtime, all the sprinkles are removed and it’s just plain vanilla JavaScript again.


## Why TypeScript

Now, JavaScript has a lot of advantages:

* Runs in browsers
* Easy to learn and write
* Versatile
* Flexible

But some of these benefits can become shortcomings once the applications we are building become exponentially larger and more complex. TypeScript was first released by Microsoft in 2012 to 
overcome these shortcomings, while still retaining the best things about JavaScript.

So, let's take a closer look at these features TypeScript adds.

## Code Demo

To read through this demo, look first at the `README.md`.

Then take a look at `javascript.js` to learn a bit about how JavaScript handles types.

Then look at `typescript.ts` to see the same file with type annotations added.

An example of a more complicated custom type is defined in `utilities/types.ts`.


## TypeScript Disadvantages

* Slows down coding with additional type annotations to write
* Adds additional compilation step
* Adds extra complexity to code, and another thing for devs to learn
  (or does it just make the existing complexity more explicit?)
* May not be worth it for smaller or simpler projects


## TypeScript Advantages

* Reduces ambiguity, making collaboration easier
* Supports and improves automated testing
* Makes integration of third party libraries easier (because typing is clearer and more accessible in the IDE)


## Conclusion

I hope that this introduction has piqued your interest in TypeScript, and that you'll consider trying it out it in one of your upcoming projects. 

### Your JavaScript Code

![](https://i.giphy.com/media/XbmdBop1Fn6J3dT6U6/giphy.webp)


### Your TypeScript Code

![](https://i.giphy.com/media/XE1YGqnvzMV769JTdI/giphy.webp)


## Questions?


## Advanced Topics

If there is extra time:

- External library support: Many npm packages supply types used along with code files
- [Utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [Debugging](https://code.visualstudio.com/docs/typescript/typescript-debugging)


## Running these files

To run the code in `javascript.js`, enter `node javascript.js` in your terminal.

In this project, I added a library called `ts-node` to allow me to run the typescript file from my terminal.

To run the code in `typescript.ts`, enter `npx ts-node typescript.ts --esm` in your terminal.


## Resources and Documentation

TypeScript's official [Getting Started Guide](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html)

TypeScript/React [Cheatsheets](https://github.com/typescript-cheatsheets/react)

Udemy [Understanding TypeScript Course](https://www.udemy.com/course/understanding-typescript/?ranMID=39197&ranEAID=k*VTdGlCbXg&ranSiteID=k.VTdGlCbXg-mhoHMZhbQmusOa6PU_hbEA&LSNPUBID=k*VTdGlCbXg)

TypeScript/React [Guided Project](https://www.coursera.org/projects/rudi-hinds-typescript-react-get-started) on Coursera

There are no official Microsoft certifications specifically for TypeScript.
