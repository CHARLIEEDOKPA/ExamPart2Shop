import { Component, inject } from '@angular/core';
import { Provider } from '../provider';
import { ProviderService } from '../provider.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.css'
})
export class ProvidersComponent {


  providers: Observable<Provider[]>
  providerService = inject(ProviderService)

  constructor(){
    this.providers = this.providerService.getAll();
  }

}
