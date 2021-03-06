import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private baseUrl = 'https://bdndev.com/~devbdn';
  private currentSubject:BehaviorSubject<any>;
  private currentUser;

  constructor(private http: HttpClient) {
    this.currentSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentSubject.getValue();
  }

  update(data) {
    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + this.currentUser.access_token);

    return this.http.patch(this.baseUrl + `/manage/supplier/`, data, {headers: header});
  }
}
