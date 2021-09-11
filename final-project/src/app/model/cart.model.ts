import { Apartment } from './apartment.model';

export class Cart {
    apartment: Apartment
    quantity: number
    constructor(apartment: Apartment, quantity: number) {
        this.apartment = apartment
        this.quantity = quantity
    }

}
