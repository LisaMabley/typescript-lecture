import { userData } from './utilities/data.js';

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

// This is called 'dynamic typing'.

function returnDataTypeDescription(name, data) {
    return `${name} is a ${typeof data}`;
}

console.log(returnDataTypeDescription('stringVar', stringVar));
console.log(returnDataTypeDescription('intVar', intVar));
console.log(returnDataTypeDescription('boolVar', boolVar));
console.log(returnDataTypeDescription('objVar', objVar));


// Variables can easily change types.
// This could be convenient, and I suppose there are cases 
// where a developer would do this on purpose ... but a lot
// of the time it's because someone, somewhere, made a mistake.
stringVar = 23;
intVar = { numberOfLegs: 8, class: 'Cephalopoda' };
boolVar = 'true';
objVar = true;


// The typing functionality TS provides is mainly to catch simple
// errors as you write code, so you can focus on finding actual bugs
// and not just typos

// Here are some examples of the type of errors TS prevents

// JS allows use of variables and attributes that don't exist
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;
console.log('Object area', area);


// JS allows math operations with data types that aren't mathable
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
