import { userData } from './data.js';
import { User } from "./utilities/types";
// import { Customer, NewUser } from "./utilities/classes";

// As we go through implementing types in this JavaScript, you'll see how
// TypeScript helps us catch these kinds of simple, common errors that can
// take up a lot of time, so we can focus on finding actual bugs and solving 
// interesting problems instead of just looking for typos.

// --- HOW TO IMPLEMENT TYPES IN TYPESCRIPT ---

// In TypeScript, we define types explicitly when we create a variable.
// This can sometimes be called 'static typing,' or 'strong typing,' 
// or 'manifest typing.' But it's probably most accurate to say that 
// TypeScript increases the 'type safety' of JavaScript.

// Each variable can be assigned an optional datatype when it is created.
// Because it's optional, TS can be added incrementally to a JavaScript codebase.
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


// --- BEST PRACTICES ---

// When a variable could represent more than one different type, it's best practice to define 
// datatypes as specifically as possible.

// We could type it these ways:
// - no type (evaluates to any)
// - any (often not allowed, because why even use typescript if you don't want to define your types?)
// - string | boolean | number | object
// - generic <Type>


// We can use custom interfaces to define specific types for our application.
const allUsers: User[] = [];


// TS supports full object-oriented programming with classes
// const cust: Customer = new Customer(objVariable);
// console.log(cust.fullName)


// Refer to the readme for info on installing and compiling TypeScript
