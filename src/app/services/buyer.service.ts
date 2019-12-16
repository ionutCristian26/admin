import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  private baseUrl = 'https://api-shipping.osc-fr1.scalingo.io';

  constructor(private http: HttpClient) { }

  update(data) {
    return this.http.patch(this.baseUrl + `/manage/buyer`, data);
  }
}
