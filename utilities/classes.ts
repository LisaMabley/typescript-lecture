import { Address, NewUser, User } from "./types";

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
