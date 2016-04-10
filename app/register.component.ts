import {Component} from 'angular2/core';
import {User} from './user';
import {Http, Headers, Response} from 'angular2/http';
import 'rxjs/Rx';


@Component({
    selector: 'register',
    template: `
    <br>
	<form [hidden]="submitted" class="form-horizontal" (ngSubmit)="onSubmit()" #registerForm="ngForm">
	<fieldset>

	<!-- Form Name -->
	<legend>Please complete this form</legend>

	<!-- Text input-->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="name">Name</label>  
	  <div class="col-md-4">
		  <input 
		  id="name" 
		  name="name" 
		  type="text" 
		  placeholder="e.g. John Smith" 
		  class="form-control input-md" required
		  [(ngModel)]="user.name">
		  TODO: remove this: {{user.name}}
	  </div>
	</div>

	<!-- Text input-->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="email">E-Mail</label>  
	  <div class="col-md-4">
	  <input
	  id="email" 
	  name="email" 
	  type="email" 
	  placeholder="johnsmith@email.com" 
	  class="form-control input-md" required
	  [(ngModel)]="user.email">
	    {{user.email}}
	  </div>
	</div>

	<!-- Text input-->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="phone">Phone</label>  
	  <div class="col-md-4">
	  <input 
	  id="phone" 
	  name="phone" 
	  type="number" 
	  class="form-control input-md"
	  [(ngModel)]="user.phone">
	    {{user.phone}}
	  </div>
	</div>

	<!-- Text input-->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="address">Address</label>  
	  <div class="col-md-4">
	  <input 
	  id="address" 
	  name="address" 
	  type="text"
	  class="form-control input-md" required
	  [(ngModel)]="user.address">
	  {{user.address}}
	  </div>
	</div>

	<!-- Multiple Checkboxes -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="languages">Languages I know</label>
	  <div class="col-md-4">
		  <div class="checkbox">
		  <label>
		      <input #spanishcb 
		      type="checkbox" 
		      (change)="user.spanish = spanishcb.checked" value="spanish">
		      Spanish
		  </label>
		  </div>
		  <div class="checkbox">
		  <label>
		      <input #englishcb 
		      type="checkbox" 
		      (change)="user.english = englishcb.checked" value="english">
		      English
		  </label>
		  </div>
		  <div class="checkbox">
		  <label>
		      <input #portguesecb 
		      type="checkbox" 
		      (change)="user.portuguese = portuguesecb.checked" value="portuguese">
		      Portuguese
		  </label>
		  </div>
	  </div>
	</div>

	<!-- Multiple Checkboxes (inline) -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="roles">I want to be a</label>
	  <div class="col-md-4">
	    <label class="checkbox-inline" for="roles">
	      <input #touristcb
	      type="checkbox" 
	      (change)="user.tourist = touristcb.checked" value="tourist"
	      value="tourist">
	      Tourist
	    </label>
	    <label class="checkbox-inline" for="roles">
	      <input #guidecb
	      type="checkbox" 
	      (change)="user.guide = guidecb.checked" value="guide"
	      value="guide">
	      Guide
	    </label>
	  </div>
	</div>

	<!-- Textarea -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="considerations">Medical considerations</label>
	  <div class="col-md-4">                     
	    <textarea class="form-control" id="considerations" name="considerations"></textarea>
	  </div>
	</div>

	<!-- Button -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for=""></label>
	  <div class="col-md-4">
	    <button 
	    type="submit" 
	    class="btn btn-primary">Sign up!</button>
	  </div>
	</div>

	</fieldset>
	</form>
	<div [hidden]="!submitted" id="submit_success">
		Registration succesful!
		{{resp}}
	</div>
    `,
})

export class RegisterComponent {
	languages = ['English', 'Spanish', 'Portuguese'];
	roles = ['Tourist', 'Guide'];
	user = new User("stefano", "asd@gmail.com", "3252129", "address", "medical");
	resp;

	constructor(private http : Http) {}
	submitted = false;
	onSubmit() { 
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Access-Control-Allow-Origin', '*');
		this.http.post(
			"hhttp://192.168.0.58:8000/users/createUser",
			JSON.stringify(this.user),
			headers
		).map((res: Response) => JSON.stringify(res.json())).subscribe((res : string) => this.resp = res);


		this.submitted = true; 
	}



	// TODO: Remove this when we're done
	get diagnostic() { return JSON.stringify(this.user); }
}