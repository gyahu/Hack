import {Component} from 'angular2/core';
import {User} from './user';
import {Http} from 'angular2/http'
import {RouteComponent} from './route.component'

@Component({
    selector: 'profile',
    templateUrl: `app/profile.html`,
    directives: [RouteComponent]
})

export class ProfileComponent {
	public user: User;
	constructor(private http : Http) { }

}