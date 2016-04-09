import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { RegisterComponent } from './register.component';
import { Router } from 'angular2/router';

@Component({
    selector: 'app-home',
    template: `
    	<div id="image_container">
    		<button class="btn"
    		(click)="onRegisterClick()"
    		>{{sign_up_text}}</button>
    	</div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent{
	sign_up_text = "Sign up now!";

	constructor(
		private _router: Router) { }

	onRegisterClick() {
		this._router.navigate(['Register']);
	}
}