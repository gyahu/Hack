import {Component} from 'angular2/core';

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
		  class="form-control input-md" required>
	    
	  </div>
	</div>

	<!-- Text input-->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="email">E-Mail</label>  
	  <div class="col-md-4">
	  <input id="email" name="email" type="text" placeholder="johnsmith@email.com" class="form-control input-md" required>
	    
	  </div>
	</div>

	<!-- Text input-->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="phone">Phone</label>  
	  <div class="col-md-4">
	  <input id="phone" name="phone" type="text" placeholder="" class="form-control input-md">
	    
	  </div>
	</div>

	<!-- Text input-->
	<div class="form-group">
	  <label class="col-md-4 control-label" for="address">Address</label>  
	  <div class="col-md-4">
	  <input id="address" name="address" type="text" placeholder="" class="form-control input-md" required="">
	    
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
    `,
})

export class RegisterComponent {
	languages = ['English', 'Spanish', 'Portuguese'];
	roles = ['Tourist', 'Guide'];
}