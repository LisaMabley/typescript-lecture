import { userData } from './data.js';
import { User } from "./utilities/types";

// ---- INSTALLING TYPESCRIPT ----

// To add typescript to your project, run `npm i typescript` in your terminal.
// TypeScript starts working right away on all the files in your project.
// If you want to implement custom settings, you can define those in a file
// named tsconfig.json.


// ---- IMPLEMENTING TYPES IN TYPESCRIPT ----

// In TypeScript, types are handled with what's called 'static typing,'
// or 'strong typing', or 'manifest typing'. But it's probably most 
// accurate to say that TypeScript increases the 'type safety' of JavaScript.

// In TypeScript, we can define types explicitly when we create a variable.
// This is optional, so TS can be added incrementally to a JavaScript codebase.
let stringVariable: string = "Hello, JavaScript";
let intVariable: number = 42;
let boolVariable: boolean = false;
let objVariable: { firstName: string, lastName: string } = {
    firstName: 'Lisa',
    lastName: 'Mabley',
};


// Variables cannot change types
// stringVariable = 23;
// intVariable = { numberOfLegs: 8, class: 'Cephalopoda' };
// boolVariable = 'true';
// objVariable = true;


// Function definitions can have the arguments and return types defined.

// If a variable is used to represent multiple types or the type is unknown, 
// TypeScript assigns its default type: any.

function returnDataTypeDescription(name: string, data: string | number | boolean | object): string {
    return `${name} is a ${typeof data}`;
}

// Because TypeScript understands the return type from this function
// it won't allow us to assign it to a variable with a different type
// intVar = returnDataTypeDescription('', boolVar);


// If a function performs some action but doesn't return anything,
// the return type is void

function logType(name: string, data: string | boolean | number | object): void {
    console.log(`${name} is a ${typeof data}`);
}


// TS alerts us in the IDE when attributes don't exist

const obj = { width: 10, height: 15 };
const area = obj.width * obj.height;
console.log(area);


// TS alerts us when we attempt to do math with variables that aren't mathable

const numCookies = 16;
const people = userData;
let numCookiesPerPerson = numCookies / people.length;
console.log('Cookies per person', numCookiesPerPerson);


// TS alerts us when we attempt to send/receive the wrong datatype to/from a function

function calculateNumberOfCookiesPerPerson(numCookies, numPeople) {
    return numCookies / numPeople;
}

numCookiesPerPerson = calculateNumberOfCookiesPerPerson(numCookies, people.length);
console.log('Cookies per person', numCookiesPerPerson);


// TS offers optional chaining to avoid null reference errors in deeply nested objects

const userHomeAddressTimezoneOffsets1 = userData.map(user => user?.contact?.address?.home?.timezone?.gmtOffset);
console.log(userHomeAddressTimezoneOffsets1);


// ---- BEST PRACTICES ----

// When a variable could represent more than one different type, it's best practice to define 
// datatypes as specifically as possible.

// In the data type functions on lines 44 and 56 above, we could type the data attribute in these ways:
// - no type (evaluates to any)
// - any (often not allowed, because why even use typescript if you don't want to define your types?)
// - string | boolean | number | object
// - generic <Type>


// ---- INTERFACES AND CLASSES IN TYPESCRIPT ----

// We can use interfaces to create custom define specific types for our application.
const allUsers: User[] = [];

// TypeScript supports full object-oriented programming.


// ---- COMPILING TYPESCRIPT TO JAVASCRIPT ----

// Just run `tsc` in your terminal. Many compilation settings can be customized by adding a `tsconfig.json` file. 

// Just for fun, see if you can find the deeply nested object and see how it compiled into JavaScript.