import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Phone } from '../phone';
import { ShopAlertsComponent } from "../shop-alerts/shop-alerts.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-provider-phones',
    standalone: true,
    templateUrl: './provider-phones.component.html',
    styleUrl: './provider-phones.component.css',
    imports: [ShopAlertsComponent,RouterLink,CommonModule]
})
export class ProviderPhonesComponent {

  @Input() phones:Observable<Phone[]> | undefined

}
