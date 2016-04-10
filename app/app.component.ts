import { Component }       from 'angular2/core';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile.component';
import { RegisterComponent } from './register.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'my-app',
  template: `
  <div id="menu">
    <div class="left_menu"><a [routerLink]="['Home']">{{app_name}}</a></div>
    <div class="right_menu">
      <span>{{username_label}}<input type="text"></span>
      <span>{{password_label}}<input type="password"></span>
      <button class="btn"><a [routerLink]="['Profile']">{{log_in_label}}</a></button>
    </div>
   
    <router-outlet></router-outlet>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES],
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
}