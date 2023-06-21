
// ---- TYPES IN JAVASCRIPT ----

// JavaScript handles types for us, under the hood.
// We don't have to think about them very much.

// When a variable is created, JavaScript infers the type from usage
// (it evaluates the datatype of whatever we assign to the variable)
let stringVar = "Hello, Diamond";
let intVar = 42;
let boolVar = false;
let objVar = {
    firstName: 'Lisa',
    lastName: 'Mabley', 
};

function logVariableTypes() {
    console.log('stringVar is a', typeof stringVar);
    console.log('intVar is a', typeof intVar);
    console.log('boolVar is a', typeof boolVar);
    console.log('objVar is a', typeof objVar);
}

logVariableTypes();

// Variables can easily change types
stringVar = 23;
intVar = { numberOfLegs: 8, class: 'Cephalopoda' };
boolVar = 'true';
objVar = true;

logVariableTypes();


// JS allows use of attributes that don't exist
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;
console.log(area);


// JS allows math operations with variables that aren't mathable
function calculateNumberOfCookiesPerPerson(numCookies, numPeople) {
    return numCookies / numPeople;
}

const numCookies = 16;
const people = [];
const numCookiesPerUser = calculateNumberOfCookiesPerPerson(numCookies, people);
console.log(numCookiesPerUser);


// JS makes avoiding errors difficult when working with deeply nested objects

// Oof. This doesn't work if any one user is missing any step in the path to the gmtOffset
const userHomeAddressTimezoneOffsets1 = users.map(user => user.contact.address.home.timezone.gmtOffset);
console.log(userHomeAddressTimezoneOffsets1);

// This prevents the error ... but is this really the best way?
const userHomeAddressTimezoneOffsets2 = users.map(user => {
    if (user &&
        user.contact &&
        user.contact.address &&
        user.contact.address.home &&
        user.contact.address.home.timezone && 
        user.contact.address.home.timezone.gmtOffset) {
            return user.contact.address.home.timezone.gmtOffset;
        }
});
console.log(userHomeAddressTimezoneOffsets2);







