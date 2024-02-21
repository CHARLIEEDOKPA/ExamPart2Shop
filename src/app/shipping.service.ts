import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shipping } from './shipping';
import { get } from 'http';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  private URL = "http://localhost:3000/shipping"
  constructor(private http:HttpClient) { }

  getShippings() {
    return this.http.get<Shipping[]>(this.URL)
  }
}
