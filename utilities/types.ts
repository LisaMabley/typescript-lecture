import { UsState } from "./enums";

export interface User {
    firstName: string,
    lastName: string,
    contact: {
        address: {
            home: Address | null,
            work: Address | null,
            mailing: Address | null;
        },
        phone: {
            home: string;
            work: string;
            mobile: {
                number: string,
                acceptsSms: boolean;
            };
        },
        email: {
            personal: string;
            work: string;
        }
    }, 
}

export interface Address {
    address1: string;
    address2: string | null;
    city: string;
    state: UsState;
    zip: string;
    timezone?: Timezone;
}

export interface Timezone {
    gmtOffset: number;
    name: string;
}