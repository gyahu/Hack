System.register(['angular2/core', './user', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_1, http_1;
    var RegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            RegisterComponent = (function () {
                function RegisterComponent(http) {
                    this.http = http;
                    this.languages = ['English', 'Spanish', 'Portuguese'];
                    this.roles = ['Tourist', 'Guide'];
                    this.user = new user_1.User("stefano", "asd@gmail.com", "3252129", "address", "medical");
                    this.submitted = false;
                }
                RegisterComponent.prototype.onSubmit = function () {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Contencdt-Type', 'application/json');
                    headers.append('Access-Control-Allow-Origin', '*');
                    this.http.post("http://192.168.0.58:8000/users/createUser/", JSON.stringify(this.user), headers).map(function (res) { return JSON.stringify(res.json()); }).subscribe(function (res) { return _this.resp = res; });
                    this.submitted = true;
                };
                Object.defineProperty(RegisterComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () { return JSON.stringify(this.user); },
                    enumerable: true,
                    configurable: true
                });
                RegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'register',
                        template: "\n    <br>\n\t<form [hidden]=\"submitted\" class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\" #registerForm=\"ngForm\">\n\t<fieldset>\n\n\t<!-- Form Name -->\n\t<legend>Please fill this form</legend>\n\n\t<!-- Text input-->\n\t<div class=\"form-group\">\n\t  <label class=\"col-md-4 control-label\" for=\"name\">Name</label>  \n\t  <div class=\"col-md-4\">\n\t\t  <input \n\t\t  id=\"name\" \n\t\t  name=\"name\" \n\t\t  type=\"text\" \n\t\t  placeholder=\"e.g. John Smith\" \n\t\t  class=\"form-control input-md\" required\n\t\t  [(ngModel)]=\"user.name\">\n\t\t  TODO: remove this: {{user.name}}\n\t  </div>\n\t</div>\n\n\t<!-- Text input-->\n\t<div class=\"form-group\">\n\t  <label class=\"col-md-4 control-label\" for=\"email\">E-Mail</label>  \n\t  <div class=\"col-md-4\">\n\t  <input\n\t  id=\"email\" \n\t  name=\"email\" \n\t  type=\"email\" \n\t  placeholder=\"johnsmith@email.com\" \n\t  class=\"form-control input-md\" required\n\t  [(ngModel)]=\"user.email\">\n\t    {{user.email}}\n\t  </div>\n\t</div>\n\n\t<!-- Text input-->\n\t<div class=\"form-group\">\n\t  <label class=\"col-md-4 control-label\" for=\"phone\">Phone</label>  \n\t  <div class=\"col-md-4\">\n\t  <input \n\t  id=\"phone\" \n\t  name=\"phone\" \n\t  type=\"number\" \n\t  class=\"form-control input-md\"\n\t  [(ngModel)]=\"user.phone\">\n\t    {{user.phone}}\n\t  </div>\n\t</div>\n\n\t<!-- Text input-->\n\t<div class=\"form-group\">\n\t  <label class=\"col-md-4 control-label\" for=\"address\">Address</label>  \n\t  <div class=\"col-md-4\">\n\t  <input \n\t  id=\"address\" \n\t  name=\"address\" \n\t  type=\"text\"\n\t  class=\"form-control input-md\" required\n\t  [(ngModel)]=\"user.address\">\n\t  {{user.address}}\n\t  </div>\n\t</div>\n\n\t<!-- Multiple Checkboxes -->\n\t<div class=\"form-group\">\n\t  <label class=\"col-md-4 control-label\" for=\"languages\">Languages I know</label>\n\t  <div class=\"col-md-4\">\n\t\t  <div class=\"checkbox\">\n\t\t  <label>\n\t\t      <input #spanishcb \n\t\t      type=\"checkbox\" \n\t\t      (change)=\"user.spanish = spanishcb.checked\" value=\"spanish\">\n\t\t      Spanish\n\t\t  </label>\n\t\t  </div>\n\t\t  <div class=\"checkbox\">\n\t\t  <label>\n\t\t      <input #englishcb \n\t\t      type=\"checkbox\" \n\t\t      (change)=\"user.english = englishcb.checked\" value=\"english\">\n\t\t      English\n\t\t  </label>\n\t\t  </div>\n\t\t  <div class=\"checkbox\">\n\t\t  <label>\n\t\t      <input #portguesecb \n\t\t      type=\"checkbox\" \n\t\t      (change)=\"user.portuguese = portuguesecb.checked\" value=\"portuguese\">\n\t\t      Portuguese\n\t\t  </label>\n\t\t  </div>\n\t  </div>\n\t</div>\n\n\t<!-- Multiple Checkboxes (inline) -->\n\t<div class=\"form-group\">\n\t  <label class=\"col-md-4 control-label\" for=\"roles\">I want to be a</label>\n\t  <div class=\"col-md-4\">\n\t    <label class=\"checkbox-inline\" for=\"roles\">\n\t      <input #touristcb\n\t      type=\"checkbox\" \n\t      (change)=\"user.tourist = touristcb.checked\" value=\"tourist\"\n\t      value=\"tourist\">\n\t      Tourist\n\t    </label>\n\t    <label class=\"checkbox-inline\" for=\"roles\">\n\t      <input #guidecb\n\t      type=\"checkbox\" \n\t      (change)=\"user.guide = guidecb.checked\" value=\"guide\"\n\t      value=\"guide\">\n\t      Guide\n\t    </label>\n\t  </div>\n\t</div>\n\n\t<!-- Textarea -->\n\t<div class=\"form-group\">\n\t  <label class=\"col-md-4 control-label\" for=\"considerations\">Medical considerations</label>\n\t  <div class=\"col-md-4\">                     \n\t    <textarea class=\"form-control\" id=\"considerations\" name=\"considerations\"></textarea>\n\t  </div>\n\t</div>\n\n\t<!-- Button -->\n\t<div class=\"form-group\">\n\t  <label class=\"col-md-4 control-label\" for=\"\"></label>\n\t  <div class=\"col-md-4\">\n\t    <button \n\t    type=\"submit\" \n\t    class=\"btn btn-primary\">Sign up!</button>\n\t  </div>\n\t</div>\n\n\t</fieldset>\n\t</form>\n\t<div [hidden]=\"!submitted\" id=\"submit_success\">\n\t\tRegistration succesful!\n\t\t{{resp}}\n\t</div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});
//# sourceMappingURL=register.component.js.map