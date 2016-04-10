import {Component} from 'angular2/core';
import {User} from './user';

@Component({
    selector: 'register',
    template: `
    <br>
	<form class="form-horizontal">
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
		  <div *ngFor="#lang of languages" class="checkbox">
		  <label for="languages-0">
		      <input type="checkbox" name="languages" value="{{lang}}"> {{lang}}
		    </label>
		  </div>
	  </div>
	</div>

	<!-- Multiple Checkboxes (inline) -->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="roles">I want to be a</label>
	  <div class="col-md-4">
	    <label *ngFor="#role of roles" class="checkbox-inline" for="roles-0">
	      <input type="checkbox" name="roles" value="{{role}}">
	      {{role}}
	    </label>
	  </div>
	</div>

	<form class="form-horizontal">
	<fieldset>

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
	    <button type="submit" class="btn btn-primary">Sign up!</button>
	  </div>
	</div>
    `,
})

export class RegisterComponent {
	languages = ['English', 'Spanish', 'Portuguese'];
	roles = ['Tourist', 'Guide'];
	user = new User("stefano", "asd@gmail.com", "3252129", "address", "medical");

	submitted = false;
	onSubmit() { this.submitted = true; }
	// TODO: Remove this when we're done
	get diagnostic() { return JSON.stringify(this.user); }
}