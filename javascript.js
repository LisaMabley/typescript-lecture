import { userData } from './data.js';

// To understand the typing advantages TypeScript brings,
// it's useful to review how types are handled in JS

// ---- TYPES IN JAVASCRIPT ----

// In our SQL database, every column has to have an assigned type.

// JavaScript, on the other hand, handles types for us under the hood.
// We don't have to think about them very much.

// When a variable is created, we don't need to specify what its type is.
// At runtime, JavaScript infers the type from usage: it looks at the values 
// assigned to that variable and assigns a datatype based on that
let stringVar = "Hello, Diamond";
let intVar = 42;
let boolVar = false;
let objVar = {
    firstName: 'Lisa',
    lastName: 'Mabley', 
};

// This is often referred to as 'weak typing' or 'dynamic typing' or 'inferred typing'. 
// However, there is a lot of disagreement about exactly what each of these terms mean,
// so many writers who want to talk about this in an unambiguous way often refer to it
// more as a spectrum, and talk about varying levels of 'type safety.'

// (As I'm walking through this code, feel free to raise your hand and ask questions
// if at any point I go to fast or I lose you.)

function returnDataTypeDescription(name, data) {
    return `${name} is a ${typeof data}`;
}

console.log(returnDataTypeDescription('stringVar', stringVar));
console.log(returnDataTypeDescription('intVar', intVar));
console.log(returnDataTypeDescription('boolVar', boolVar));
console.log(returnDataTypeDescription('objVar', objVar));


// Variables can easily change types.
stringVar = 23;
intVar = { numberOfLegs: 8, class: 'Cephalopoda' };
boolVar = 'true';
objVar = true;

// Now, I'm sure if you need to do this, and you mean to do it,
// then it's super convenient that JS allows you to do it.

// I'm probably the only one in this room that has ever 
// reassigned a variable as a different datatype *by mistake*.

// ---- ERRORS THAT ARE EASY TO MAKE IN JAVASCRIPT ----

// That's just one of the simply errors that are really 
// easy to make in JavaScript. Now I'm going to go through
// a few more JavaScript ... I don't know if I should call 
// them shortcomings ... but at least they're behaviors that
// can often lead to errors. Then we'll have a nice baseline
// to compare to the way TypeScript handles the same thing.


// JS allows use of variables and attributes that don't exist
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;
console.log('Object area', area);


// JS allows math operations with data types that aren't numbers
const numCookies = 16;
const people = [{ name: 'Lisa'}, { name: 'Dane' }];
let numCookiesPerPerson = numCookies / people;
console.log('Cookies per person', numCookiesPerPerson);


// JS allows us to send the wrong types as function params
function calculateNumberOfCookiesPerPerson(numCookies, numPeople) {
    return numCookies / numPeople;
}

numCookiesPerPerson = calculateNumberOfCookiesPerPerson(numCookies, people);
console.log('Cookies per person', numCookiesPerPerson);


// JS makes avoiding errors difficult when working with deeply nested objects
let userHomeAddressTimezoneOffsets = userData.forEach(user => user.contact.address.home.timezone.gmtOffset);
console.log(userHomeAddressTimezoneOffsets);


// This prevents the error ... but is this really the best way?
const userHomeAddressTimezoneOffsets2 = [];
userData.forEach(user => {
    if (user &&
        user.contact &&
        user.contact.address &&
        user.contact.address.home &&
        user.contact.address.home.timezone && 
        user.contact.address.home.timezone.gmtOffset) {
            userHomeAddressTimezoneOffsets2.push(user.contact.address.home.timezone.gmtOffset);
        } else {
            console.error(`User ID ${user.id} missing timezone offset`);
        }
});
console.log('User timezone offsets', userHomeAddressTimezoneOffsets2);
