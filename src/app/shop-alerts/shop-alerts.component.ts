import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shop-alerts',
  standalone: true,
  imports: [],
  templateUrl: './shop-alerts.component.html',
  styleUrl: './shop-alerts.component.css'
})
export class ShopAlertsComponent {

  @Output() notify =  new EventEmitter()

}
