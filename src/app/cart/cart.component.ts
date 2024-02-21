import { Component, OnInit, inject } from '@angular/core';
import { Phone } from '../phone';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  
  cart!:Observable<Phone[]>
  form!:FormGroup
  cartService =  inject(CartService)
  empty = true

  ngOnInit(): void {
    this.cart = this.cartService.getAll();
    this.form = new FormGroup({
      name: new FormControl(''),
      address: new FormControl('')
    })
  }

  purchase() {
    this.cartService.addToLocalStorage()
    this.cart = this.cartService.removeAll()
    alert(`Thank you for buying, ${this.form.value}`)
    
  }

}
