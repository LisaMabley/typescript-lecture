import { Customer, NewUser } from "./utilities/classes";
import userData from './utilities/data';
import { User } from "./utilities/types";

// --- HOW TO IMPLEMENT TYPES IN TYPESCRIPT ---

// As we go through implementing types in this JavaScript, you'll see how
// TypeScript helps us avoid the types of simple, common errors that can
// drive us crazy and take up a lot of our time, so we can focus instead 
// on finding actual bugs and solving the interesting problems.

// In TypeScript, we define types explicitly when we create a variable.
// This is called 'static typing'.

// Each variable can be assigned an optional datatype when it is created.
// Because it's optional, TS can be added incrementally to a JavaScript codebase.
let stringVariable: string = "Hello, JavaScript";
let intVariable: number = 42;
let boolVariable: boolean = false;
let objVariable: NewUser = {
    firstName: 'Lisa',
    lastName: 'Mabley',
};

// Function definitions can have the arguments and return types defined.

// If a variable is used to represent multiple types or the type is unknown, 
// TypeScript assigns its default type: any.
function returnDataTypeDescription(name: string, data: string | number | boolean | object): string {
    return `${name} is a ${typeof data}`;
}

// intVar = returnDataTypeDescription('', boolVar);

// If a function performs some action but doesn't return anything,
// the return type is void
function logType(name: string, data: string | boolean | number | object): void {
    console.log(`${name} is a ${typeof data}`);
}

// Variables cannot change types
stringVariable = 23;
intVariable = { numberOfLegs: 8, class: 'Cephalopoda' };
boolVariable = 'true';
objVariable = true;


// TS alerts us in the IDE when attributes don't exist
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;
console.log(area);


// TS alerts us when we attempt to do math with variables that aren't mathable
const numCookies = 16;
const people = [];
let numCookiesPerPerson = numCookies / people;
console.log('Cookies per person', numCookiesPerPerson);

// TS alerts us when we attempt to send/receive the wrong datatype to/from a function
function calculateNumberOfCookiesPerPerson(numCookies, numPeople) {
    return numCookies / numPeople;
}

numCookiesPerPerson = calculateNumberOfCookiesPerPerson(numCookies, people);
console.log('Cookies per person', numCookiesPerPerson);


// TS offers optional chaining to avoid null reference errors in deeply nested objects
const userHomeAddressTimezoneOffsets1 = userData.map(user => user?.contact?.address?.home?.timezone?.gmtOffset);
console.log(userHomeAddressTimezoneOffsets1);


// You'll notice based on usage that the data parameter in the function above 
// represents several different types. Generally it's best practice to define 
// datatypes as specifically as possible.

const allUsers: User[] = [];


// TS supports full object-oriented programming with classes
const cust: Customer = new Customer(objVariable);
console.log(cust.fullName)


// Refer to the readme for info on installing and compiling TypeScript