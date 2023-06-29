import { UsState, UserRole } from "./enums";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    // It is best practice to specify when a value might be undefined.
    // This key will definitely be there, but the value might be undefined.
    role: UserRole | undefined;
    contactInformation: {
        addresses: {
            // ... or when it might be null.
            // Note that we can reference other interfaces within this one.
            homeAddress: Address | null;
            workAddress: Address | null;
        },
        // A question mark indicates that the entire property is optional.
        // So forget about the value, this key might not even be there.
        phoneNumbers?: {
            work: string;
            mobile: {
                number: string;
                acceptsSms: boolean;
            };
        },
        emailAddresses?: {
            personal: string;
            work: string;
        }
    }, 
}


export interface Address {
    address1: string;
    address2?: string | null;
    city: string;
    state: UsState; // See enums file
    zip: string;
    timezone?: Timezone; // See below
}


export interface Timezone {
    gmtOffset: number;
    name: string;
}

// ---- UTILITY TYPES ----

// PARTIAL
// Sets all properties to optional
export type UserAccountFormInProgress = Partial<User>;

// OMIT
// Excludes specified properties
export type UnsavedUser = Omit<User, "id">;

// PICK
// Includes only specified properties
export type UserPreview = Pick<User, 'firstName' | 'lastName' | 'role'>;

// These are just a few of TypeScript's useful utility types.
