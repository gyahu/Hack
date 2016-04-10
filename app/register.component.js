System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var RegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RegisterComponent = (function () {
                function RegisterComponent() {
                    this.languages = ['English', 'Spanish', 'Portuguese'];
                    this.roles = ['Tourist', 'Guide'];
                }
                RegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'register',
                        template: "\n    <br>\n\t<form class=\"form-horizontal\">\n\t<fieldset>\n\n\t<!-- Form Name -->\n\t<legend>Please complete this form</legend>\n\n\t<!-- Text input-->\n\t<div class=\"form-group\">\n\t  <label class=\"col-md-4 control-label\" for=\"name\">Name</label>  \n\t  <div class=\"col-md-4\">\n\t\t  <input \n\t\t  id=\"name\" \n\t\t  name=\"name\" \n\t\t  type=\"text\" \n\t\t  placeholder=\"e.g. John Smith\" \n\t\t  class=\"form-control input-md\" required>\n\t    \n\t  </div>\n\t</div>\n\n\t<!-- Text input-->\n\t<div class=\"form-group\">\n\t  <label class=\"col-md-4 control-label\" for=\"email\">E-Mail</label>  \n\t  <div class=\"col-md-4\">\n\t  <input id=\"email\" name=\"email\" type=\"text\" placeholder=\"johnsmith@email.com\" class=\"form-control input-md\" required>\n\t    \n\t  </div>\n\t</div>\n\n\t<!-- Text input-->\n\t<div class=\"form-group\">\n\t  <label class=\"col-md-4 control-label\" for=\"phone\">Phone</label>  \n\t  <div class=\"col-md-4\">\n\t  <input id=\"phone\" name=\"phone\" type=\"text\" placeholder=\"\" class=\"form-control input-md\">\n\t    \n\t  </div>\n\t</div>\n\n\t<!-- Text input-->\n\t<div class=\"form-group\">\n\t  <label class=\"col-md-4 control-label\" for=\"address\">Address</label>  \n\t  <div class=\"col-md-4\">\n\t  <input id=\"address\" name=\"address\" type=\"text\" placeholder=\"\" class=\"form-control input-md\" required=\"\">\n\t    \n\t  </div>\n\t</div>\n\n\t<!-- Multiple Checkboxes -->\n\t<div class=\"form-group\">\n\t  <label class=\"col-md-4 control-label\" for=\"languages\">Languages I know</label>\n\t  <div class=\"col-md-4\">\n\t\t  <div *ngFor=\"#lang of languages\" class=\"checkbox\">\n\t\t  <label for=\"languages-0\">\n\t\t      <input type=\"checkbox\" name=\"languages\" value=\"{{lang}}\"> {{lang}}\n\t\t    </label>\n\t\t  </div>\n\t  </div>\n\t</div>\n\n\t<!-- Multiple Checkboxes (inline) -->\n\t<div class=\"form-group\">\n\t  <label class=\"col-md-4 control-label\" for=\"roles\">I want to be a</label>\n\t  <div class=\"col-md-4\">\n\t    <label *ngFor=\"#role of roles\" class=\"checkbox-inline\" for=\"roles-0\">\n\t      <input type=\"checkbox\" name=\"roles\" value=\"{{role}}\">\n\t      {{role}}\n\t    </label>\n\t  </div>\n\t</div>\n\n\t<form class=\"form-horizontal\">\n\t<fieldset>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});
//# sourceMappingURL=register.component.js.map