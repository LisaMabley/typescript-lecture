import { Address, User } from "./types";

export class Customer implements User {
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
    }

    constructor(user: NewUser) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.id = Math.random().toString(36).substring(2) + Date.now().toString(36).toString();
        this.contact = {
            address: {
                home: null,
                work: null,
                mailing: null,
            }
        }
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
  }

  // Just created users won't have entered anything but their name 
  // when their user record is first saved

  // Pick is one of a number of TypeScript utility types
  // that help us work with types in a more flexible way
  // others are Partial, Omit
  export type NewUser = Pick<User, 'firstName' | 'lastName'>;
