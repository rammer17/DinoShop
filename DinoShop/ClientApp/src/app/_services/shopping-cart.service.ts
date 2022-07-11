import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { IDino } from "../_models/dino.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    cartItems: any[] = [];
    orderDetails = new BehaviorSubject<{
        cartItems?: IDino[],
        price?: number,
        firstName?: string,
        lastName?: string,
        email?: string,
        phoneNumber?: number,
        address?: string
    }>({});

    addToCart(dino: any) {
        this.cartItems.push(dino);
    }
    getCartItems() {
        return this.cartItems;
    }
}
interface Order {
    cartItems?: any[],
    firstName?: string,
    lastName?: string,
    email?: string,
    phoneNumber?: number,
    address?: string
}