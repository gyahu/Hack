import { Component }       from 'angular2/core';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile.component';
import { RegisterComponent } from './register.component';
import { Http, Headers, Response} from 'angular2/http'
import {FORM_DIRECTIVES} from 'angular2/common'
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  template: `
  <div id="menu">
    <div class="left_menu"><a [routerLink]="['Home']">{{app_name}}</a></div>
    
      <div class="right_menu">
        <form #f="ngForm" (ngSubmit)="onSubmit(f.value)" [hidden] = "logged_in">
          <span>{{username_label}}<input ngControl="username" type="text"></span>
          <span>{{password_label}}<input ngControl="password" type="password"></span>
          <button type="submit" class="btn">{{log_in_label}}</button>
        </form>
      </div>
    <pre>sent : {{data}}
    received : {{resp}} </pre>
    <router-outlet></router-outlet>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
})

@RouteConfig([
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileComponent,
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterComponent,
  },
])
export class AppComponent {
  app_name = 'THE NAME';
  username_label = 'Username';
  password_label = "Password";
  log_in_label = "Log In";
  data: string;
  resp;

  logged_in = false;

  constructor(
    private __router : Router,
    private http: Http
    ) { }

  onSubmit(data) {
    var headers = new Headers();
    headers.append('Contencdt-Type', 'application/json');
    this.data = JSON.stringify(data);
    this.http.post(
      "http://192.168.0.58:8000/users/login/",
      this.data,
      headers
    )
    .map((res: Response) => JSON.stringify(res.json()))
    .subscribe(
      data => this.resp = data,
      err => this.logError(err)
     );
  }

  logError(err) {
    console.error('There was an error: ' + err);
  }
}