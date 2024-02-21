import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from '../provider';
import { Phone } from '../phone';
import { ProviderService } from '../provider.service';
import { ShopService } from '../shop.service';
import { CommonModule } from '@angular/common';
import { ProviderPhonesComponent } from "../provider-phones/provider-phones.component";

@Component({
    selector: 'app-provider',
    standalone: true,
    templateUrl: './provider.component.html',
    styleUrl: './provider.component.css',
    imports: [CommonModule, ProviderPhonesComponent]
})
export class ProviderComponent implements OnInit {

  route = inject(ActivatedRoute)
  providerService =  inject(ProviderService)
  shopService = inject(ShopService)

  provider$!: Observable<Provider | undefined>
  phones!:Observable<Phone[]>

  ngOnInit(): void {
    let name = this.route.snapshot.paramMap.get("name")
    console.log(name)
    this.provider$ = this.providerService.getProviderByName(name!); 
    this.provider$.subscribe(x => console.log(x))
    this.phones =  this.shopService.getPhonesByProvider(name!);
  }


}
