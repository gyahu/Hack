import { Component }       from 'angular2/core';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu.component';
import { ProfileComponent } from './profile.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'my-app',
  template: `
  <div id="menu">
    <div class="left_menu">{{app_name}}</div>
    <div class="right_menu">
      <span>{{username_label}}<input type="text"></span>
      <span>{{password_label}}<input type="password"></span>
      <button class="btn">Log in</button>
    </div>
    <a [routerLink]="['Home']">Home</a>
    <a [routerLink]="['Profile']">Profile</a>
    <router-outlet></router-outlet>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES, HomeComponent, MenuComponent],
  providers: [
    ROUTER_PROVIDERS,
  ]
})

  @RouteConfig([
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileComponent
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeComponent
    }
  ])

export class AppComponent {
  app_name = 'THE NAME';
  username_label = 'Username';
  password_label = "Password";
}