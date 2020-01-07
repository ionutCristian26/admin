import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://shipments-api.osc-fr1.scalingo.io';

  private currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient,
              private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
  }

  login(user) {
    const body = new FormData();
    body.append('grant_type', 'password');
    body.append('username', user.username);
    body.append('password', user.password);
    body.append('client_id', 'user');
    body.append('client_secret', 'userApi1234567');
    body.append('scope', 'api');

    let header = new HttpHeaders();
    header.append('Content-Type', 'aplication/x-www-form-urlencoded')

    return this.http.post(this.baseUrl + '/oauth2/generate', body, {headers:header}).pipe(map(res => {
      if (res && res['access_token']) {
        res['timestamp'] = new Date().getTime();
        localStorage.setItem('currentUser', JSON.stringify(res));
        this.currentUserSubject.next(res)
      }
      return res;
    }));
  }

  get currentUserValue() {
    return new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser'))).value;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login'])
  }
}
