import { userData } from './utilities/data.js';

// To understand the typing advantages TypeScript brings,
// it's useful to understand how types are handled in JS

// ---- TYPES IN JAVASCRIPT ----

// We know about data types, because every column 
// in our SQL database has an assigned type.

// JavaScript handles types for us, under the hood.
// We don't have to think about them very much.

// When a variable is created, se don't need to specify what its type is
// At runtime, JavaScript infers the type from usage: it looks at the values 
// assigned to the variable and assigns a datatype based on that
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


// JS allows use of variables and attributes that don't exist
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;
console.log('Object area', area);


// JS allows math operations with variables that aren't mathable
const numCookies = 16;
const people = [];
let numCookiesPerPerson = numCookies / people;
console.log('Cookies per person', numCookiesPerPerson);

// JS allows us to send the wrong types as function params
function calculateNumberOfCookiesPerPerson(numCookies, numPeople) {
    return numCookies / numPeople;
}

numCookiesPerPerson = calculateNumberOfCookiesPerPerson(numCookies, people);
console.log('Cookies per person', numCookiesPerPerson);

// JS makes avoiding errors difficult when working with deeply nested objects

// Oof. This doesn't work if any one user is missing any step in the path to the gmtOffset
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
            console.error('User IDs missing timezone offset', user.id);
        }
});
console.log('User timezone offsets', userHomeAddressTimezoneOffsets2);
