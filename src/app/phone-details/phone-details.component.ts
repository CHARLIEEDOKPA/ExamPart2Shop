import { Component, OnInit, inject } from '@angular/core';
import { Phone } from '../phone';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ShopService } from '../shop.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-phone-details',
  standalone: true,
  imports: [AsyncPipe,CommonModule,RouterLink],
  templateUrl: './phone-details.component.html',
  styleUrl: './phone-details.component.css'
})
export class PhoneDetailsComponent implements OnInit{
  
  route = inject(ActivatedRoute);
  cartService = inject(CartService)
  shopService = inject(ShopService)
  phone$!:Observable<Phone | undefined>

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    const id = Number(routeParams.get("id"));
    this.phone$ = this.shopService.getPhone(id)

  }

  addToCartShop(phone:Phone) {
    this.cartService.addPhoneToCart(phone);
    alert(`Your ${phone.productName} is added to the shop cart`)
  }



}
