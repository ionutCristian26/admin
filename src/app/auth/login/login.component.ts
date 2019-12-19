import {Component, OnInit} from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
// import {AuthenticationService} from '../../services/authentication.service';
import {first} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthService} from "../../services/auth.service";
import {AlertService} from "ngx-alerts";

@ Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  private currentUserSubject: BehaviorSubject<any>;
  currentUser: Observable<any>;
  validation_messages = {
    username: [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Email cannot be more than 25 characters long.' },
      { type: 'email', message: 'Email must be a valid email address.' },
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
    ],
  };

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService,
      private alertService: AlertService,
  ) {}

  ngOnInit() {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/pages']);
    }
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this .currentUserSubject.asObservable();
    this.loginForm = this .formBuilder.group({
      username: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(25)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
    this.returnUrl = this .route.snapshot.queryParams.returnUrl || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this .loginForm.controls; }

  login() {
    this.submitted = true;
    // stop here if form is invalid
    if (this .loginForm.invalid) {
      this.submitted = false;
      return;
    } else {
      this.loading = true;
      this.authService.login(this.loginForm.value).subscribe(res => {
        this.router.navigate(['/pages']);
        this.loading = false;
      }, error => {
        this.loading = false;
        this.alertService.danger(error.error.message);
      })
    }
  }
}
