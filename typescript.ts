import { userData } from './data.js';
import { UserRole } from './utilities/enums.js';
import { UserPreview } from "./utilities/types.js";


// ---- INSTALLING TYPESCRIPT ----

// To add typescript to your project, run `npm i typescript` in your terminal.
// TypeScript starts working right away on all the files in your project, 
// even without any code changes. We could compile this to JavaScript right 
// now with the default settings.


// ---- IMPLEMENTING TYPES IN TYPESCRIPT ----

// In TypeScript, types are handled with what's called 'static typing,'
// or 'strong typing', or 'manifest typing'. But it's probably most 
// accurate to say that TypeScript increases the 'type safety' of JavaScript.

// This means that we can define types explicitly when we create a variable, 
// and they cannot change types. Type annotation is optional, so TypeScript
// can be added incrementally to an existing JavaScript codebase.

let stringVar: string = "Hello, Diamond";
let intVar: number = 42;
let boolVar: boolean = false;
let arrayVar: number[] = [2, 3, 5, 7, 11, 13, 17];
let objVar: { firstName: string, lastName: string } = {
    firstName: 'Lisa',
    lastName: 'Mabley', 
};

// stringVar = 23;
// intVar = { numberOfLegs: 8, class: 'Cephalopoda' };
// boolVar = [{ name: 'Lisa'}, { name: 'Dane' }];
// arrayVar = true;
// objVar = 'true';


// Function definitions can have the arguments and return types defined.

function returnDataTypeDescription(name: string, data): string {
    return `${name} is a ${typeof data}`;
}

console.log(returnDataTypeDescription('stringVar', stringVar));
console.log(returnDataTypeDescription('intVar', intVar));
console.log(returnDataTypeDescription('boolVar', boolVar));
// console.log(returnDataTypeDescription('arrayVar', arrayVar));
// console.log(returnDataTypeDescription('objVar', objVar));

// Because TypeScript understands the return type from this function
// it won't allow us to assign it to a variable with a different type
// intVar = returnDataTypeDescription('', boolVar);


// ---- AVAILABLE TYPES ----

// Primitive types:
// * string
// * number 
// * boolean

// Arrays of other types:
// * <type>[]
// (for example: string[], number[])

// Any:
// Any is the default type typescript assigns to anything with an
// undefined type. 
function returnDataTypeDescriptionAny(name: string, data: any): string {
    return `${name} is a ${typeof data}`;
}

// Void: 
// If a function performs some action but doesn't return anything,
// the return type is void.
function logType(name: string, data: string | boolean | number | object): void {
    console.log(`${name} is a ${typeof data}`);
}

// Union types:
// When a variable could represent more than one different type, it's 
// best practice to define the datatype as specifically as possible.
// * <type> | <different-type> | <another-different-type>
function returnDataTypeDescriptionUnion(name: string, data: string | number | boolean): string {
    return `${name} is a ${typeof data}`;
}

// Interfaces:
// Interfaces can be used to create custom object types.
let preview: UserPreview = {
    firstName: 'Lisa',
    lastName: 'Mabley',
    role: UserRole.mod, 
};

// Generics:
// Functions can be written to accept any type, as long as the type is 
// passed in as a parameter (Type can be named whatever you want)
function returnWhatever<Tipe>(name: string, data: Tipe): Tipe {
    return data;
}

// TypeScript also supports full object-oriented programming with classes and class methods.


// TS immediately alerts us in the IDE when properties don't exist

const obj = { width: 10, height: 15 };
const area = obj.width * obj.height;
console.log('Object area', area);


// TS does not allow math operations with data types that aren't numbers

const numCookies = 16;
const people = [{ name: 'Lisa'}, { name: 'Dane' }];
let numCookiesPerPerson: number = numCookies / people.length;
console.log('Cookies per person', numCookiesPerPerson);


// TS alerts us when we attempt to send/receive the wrong datatype to/from a function

function calculateNumberOfCookiesPerPerson(numCookies: number, numPeople: number): number {
    return numCookies / numPeople;
}

numCookiesPerPerson = calculateNumberOfCookiesPerPerson(numCookies, people.length);
console.log('Cookies per person', numCookiesPerPerson);


// TS offers optional chaining to avoid null reference errors in deeply nested objects

let userHomeAddressTimezoneOffsets = userData.forEach(user => user?.contactInformation?.addresses?.homeAddress?.timezone?.gmtOffset);
console.log(userHomeAddressTimezoneOffsets);


// ---- COMPILING TYPESCRIPT TO JAVASCRIPT ----

// Just run `tsc` in your terminal. Many compilation settings can be customized by adding a `tsconfig.json` file. 

// Just for fun, see if you can find the deeply nested object and see how it compiled into JavaScript.