import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provider } from './provider';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private URL = "http://localhost:3000/providers"
  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<Provider[]>(this.URL);
  }

  getProviderByName(name:string):Observable<Provider | undefined> {
    return this.getAll()
    .pipe(map((providers:Provider[]) =>  providers.find(x => x.name === name)))
  }
}
