import {Component} from 'angular2/core';

@Component({
    selector: 'app-home',
    template: `
    	<div id="image_container">
    		<button class="btn">{{sign_up_text}}</button>
    	</div>
    `
})

export class HomeComponent{
	sign_up_text = "Sign up now!";
}