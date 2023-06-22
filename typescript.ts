import { Customer, NewUser } from "./utilities/classes";
import userData from './utilities/data';


// --- TYPES IN TYPESCRIPT ---

// In TypeScript, we define types explicitly when we create a variable
// This is called 'static typing'.

// Each variable can be assigned an optional datatype when it is created
let stringVariable: string = "Hello, JavaScript";
let intVariable: number = 42;
let boolVariable: boolean = false;
let objVariable: NewUser = {
    firstName: 'Lisa',
    lastName: 'Mabley',
};

// Variables cannot change types
stringVariable = 23;
intVariable = { numberOfLegs: 8, class: 'Cephalopoda' };
boolVariable = 'true';
objVariable = true;


// Function definitions can have the arguments and return types defined
// (but it's optional, so TS can be added to a codebase incrementally)

function returnDataTypeDescription(name: string, data): string {
    return `${name} is a ${typeof data}`;
}

// If a function performs some action but doesn't return anything,
// the return type is void

// Generally, it's best practice to use datatypes that are as specific as possible 
// Below, we expect the data param to be any number of types. We could type it these ways:
// no type
// any[]
// string | boolean | number | object
function logType(name: string, data: string | boolean | number | object): void {
    console.log(`${name} is a ${typeof data}`);
}


// TS alerts us in the IDE when attributes don't exist
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;
console.log(area);


// TS alerts us when we attempt to do math with variables that aren't mathable
const numCookies = 16;
const people = userData;
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

// TS supports full object-oriented-style programming
// with classes
const cust = new Customer(objVariable);
console.log(cust.fullName)