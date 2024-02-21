import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Shipping } from '../shipping';
import { ShippingService } from '../shipping.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit {

  shippingService =  inject(ShippingService)
  shippings!: Observable<Shipping[]>


  ngOnInit(): void {
    this.shippings = this.shippingService.getShippings()
  }

  



}
