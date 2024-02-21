import { Injectable } from '@angular/core';
import { Phone } from './phone';
import { BehaviorSubject } from 'rxjs';
import { Storage } from './storage';
import { log } from 'console';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Phone[] = [];

  cartSubject = new BehaviorSubject<Phone[]>(this.cart);

  LOCALSTORAGE_NAME = 'purchased';

  localStorage: Storage;

  productsBought!: Phone[];

  constructor() {
    this.localStorage = new Storage();
    this.productsBought = JSON.parse(
      this.localStorage.get(this.LOCALSTORAGE_NAME)!
    );
    console.log(this.productsBought);
  }

  addPhoneToCart(phone: Phone) {
    this.cart.push(phone);
    this.cartSubject.next(this.cart);
  }

  addToLocalStorage() {
    if (localStorage.getItem(this.LOCALSTORAGE_NAME)) {
      let purchasedProducts: Phone[] = JSON.parse(
        localStorage.getItem(this.LOCALSTORAGE_NAME)!
      );
      purchasedProducts.push(...this.cart);

      this.localStorage.set(
        this.LOCALSTORAGE_NAME,
        JSON.stringify(purchasedProducts)
      );
      this.productsBought = purchasedProducts;
    } else {
      localStorage.setItem('purchased', JSON.stringify(this.cart));
    }
  }

  containsOnProductsBought(id: number): boolean {
    return (
      this.productsBought !== null &&
      this.productsBought.some((x) => x.id == id)
    );
  }

  getAll() {
    return this.cartSubject.asObservable();
  }

  removeAll() {
    this.cart = [];
    this.cartSubject.next(this.cart);
    return this.cartSubject.asObservable();
  }
}
