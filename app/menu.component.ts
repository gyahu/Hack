import {Component} from 'angular2/core';
import { ProfileComponent } from './profile.component';
import { HomeComponent } from './home.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'app-menu',
    template:`
    	<div class="left_menu">{{app_name}}</div>
    	<div class="right_menu">
    		<span>{{username_label}}<input type="text"></span>
    		<span>{{password_label}}<input type="password"></span>
    		<button class="btn">Log in</button>
    	</div>
    	<a [routerLink]="['Home']">Home</a>
    	<a [routerLink]="['Profile']">Profile</a>
    `,
   directives: [ROUTER_DIRECTIVES],
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

export class MenuComponent { 
	app_name = 'THE NAME';
  	username_label = 'Username';
  	password_label = "Password";
}