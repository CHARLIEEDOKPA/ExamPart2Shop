import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ShopComponent } from '../shop/shop.component';
import { CartService } from '../cart.service';
import { Phone } from '../phone';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [CommonModule,RouterLink,ShopComponent, RouterOutlet,RouterLinkActive],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css'
})
export class BarComponent implements OnInit{
 
  items !: Phone[]

  cartService = inject(CartService);
  
  ngOnInit(): void {
    this.cartService.getAll().subscribe(x => this.items = x);
  }


}
