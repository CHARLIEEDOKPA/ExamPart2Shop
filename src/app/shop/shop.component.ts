import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Phone } from '../phone';
import { ShopService } from '../shop.service';
import { CommonModule } from '@angular/common';
import { ShopAlertsComponent } from "../shop-alerts/shop-alerts.component";
import { RouterLink } from '@angular/router';
import { ProvidersComponent } from "../providers/providers.component";
import { CartService } from '../cart.service';

@Component({
    selector: 'app-shop',
    standalone: true,
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.css',
    imports: [CommonModule, ShopAlertsComponent, RouterLink, ProvidersComponent]
})
export class ShopComponent implements OnInit{

  phones!:Observable<Phone[]>
  phoneService = inject(ShopService);
  cartService = inject(CartService)
  
  boughtPreviously(id:number):boolean {
    return this.cartService.containsOnProductsBought(id)
  }


  ngOnInit(): void {
    this.phones = this.phoneService.getPhones();
  }

  share() {
    alert("Your phone has been shared")
  }

  onNotify() {
    alert("You will be notified when the product goes on sale")
  }

}
