import { Component }       from 'angular2/core';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu.component';
import { ProfileComponent } from './profile.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'my-app',
  template: `
    <app-menu>Loading menu...</app-menu>
    
    <router-outlet></router-outlet>
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
  title = 'Tour of Heroes';
}