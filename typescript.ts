import { User } from "./utilities/types";


// --- TYPES IN TYPESCRIPT ---

// In TypeScript, we define types explicitly

// Each variable can be assigned an optional datatype when it is created
let stringVariable: string = "Hello, JavaScript";
let intVariable: number = 42;
let boolVariable: boolean = false;
let objVariable: User = {
    firstName: 'Lisa',
    lastName: 'Mabley',
    email: 'lisamabley@gmail.com',  
};

// Function definitions can have the arguments and return types defined

function returnDataTypeDescription(name: string, data): string {
    return `${name} is a ${typeof data}`;
}

// If a function performs some action but doesn't return anything,
// the return type is void

function logType(name: string, data): void {
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

// TS alerts us when we attempt to send/receive the wrong datatype to/from a function
function calculateNumberOfCookiesPerPerson(numCookies: number, numPeople: number): number {
    return numCookies / numPeople;
}

const numCookies = 16;
const people = [];
const numCookiesPerUser = calculateNumberOfCookiesPerPerson(numCookies, people);
console.log(numCookiesPerUser);


// JS makes avoiding errors difficult when working with deeply nested objects
const users: User[] = [
    {
        firstName: 'Lisa',
        lastName: 'Mabley',
        contact: {
            address: {
                home: {
                    address1: '122 Main Street',
                    address2: null,
                    city: 'Minneapolis',
                    state: 'MN',
                    zip: '55413',
                    timezone: {
                        gmtOffset: -5,
                        name: 'CDT',
                    },
                },
            },
        }, 
    },
    {
        firstName: 'Liz',
        lastName: 'Kerber',
        contact: {
            address: {
                work: {
                    address1: '123 Main Street',
                    address2: null,
                    city: 'Minneapolis',
                    state: 'MN',
                    zip: 55413,
                },
            },
        }, 
    }
];

// Oof. This doesn't work if any one user is missing any step in the path to the gmtOffset
const userHomeAddressTimezoneOffsets1 = users.map(user => user?.contact?.address?.home?.timezone?.gmtOffset);
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

