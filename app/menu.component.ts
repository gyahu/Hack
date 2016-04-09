import {Component} from 'angular2/core';

@Component({
    selector: 'app-menu',
    template:`
    	<div class="left_menu">{{app_name}}</div>
    	<div class="right_menu">
    		<span>{{username_label}}<input type="text"></span>
    		<span>{{password_label}}<input type="password"></span>
    		<button class="btn">Log in</button>
    	</div>
    `
})

export class MenuComponent { 
	app_name = 'THE NAME';
  	username_label = 'Username';
  	password_label = "Password";
}