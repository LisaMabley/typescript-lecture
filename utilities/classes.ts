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
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
  }

  // Just created users won't have entered anything but their name 
  // when their user record is first saved
  export type NewUser = Pick<User, 'firstName' | 'lastName'>;
