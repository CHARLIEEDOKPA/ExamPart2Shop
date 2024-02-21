import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Phone } from './phone';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private URL = `http://localhost:3000/phones`;

  constructor(private http: HttpClient) {}

  getPhonesByProvider(provider:string) {
    return this.getPhones().pipe(map((phones:Phone[]) => phones.filter(x => x.provider === provider)))
  }

  getPhones() {
    return this.http.get<Phone[]>(this.URL);
  }

  getPhone(id: number): Observable <Phone | undefined> {
    return this.http.get<Phone | undefined>(this.URL + `/${id}`)
  }
}
