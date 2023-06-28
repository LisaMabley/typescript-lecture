import { UsState } from "./enums";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    contact: {
        address: {
            home: Address | null;
            work: Address | null;
            mailing: Address | null;
        },
        phone?: {
            home: string;
            work: string;
            mobile: {
                number: string;
                acceptsSms: boolean;
            };
        },
        email?: {
            personal: string;
            work: string;
        }
    }, 
}


export interface Address {
    address1: string;
    address2?: string | null;
    city: string;
    state: UsState;
    zip: string;
    timezone?: Timezone;
}


export interface Timezone {
    gmtOffset: number;
    name: string;
}

  // Just created users won't have entered anything but their name 
  // when their user record is first saved

  // Pick is one of a number of TypeScript utility types
  // that help us work with types in a more flexible way.
  // Some others are Partial, Omit
  export type NewUser = Pick<User, 'firstName' | 'lastName'>;