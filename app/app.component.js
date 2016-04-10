System.register(['angular2/core', './home.component', './profile.component', './register.component', 'angular2/http', 'angular2/common', 'angular2/router', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, home_component_1, profile_component_1, register_component_1, http_1, common_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(__router, http) {
                    this.__router = __router;
                    this.http = http;
                    this.app_name = 'THE NAME';
                    this.username_label = 'Username';
                    this.password_label = "Password";
                    this.log_in_label = "Log In";
                    this.logged_in = false;
                }
                AppComponent.prototype.onSubmit = function (data) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Contencdt-Type', 'application/json');
                    this.data = JSON.stringify(data);
                    this.http.post("http://192.168.0.58:8000/users/login/", this.data, headers)
                        .map(function (res) { return JSON.stringify(res.json()); })
                        .subscribe(function (data) { return _this.resp = data; }, function (err) { return _this.logError(err); });
                };
                AppComponent.prototype.logError = function (err) {
                    console.error('There was an error: ' + err);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <div id=\"menu\">\n    <div class=\"left_menu\"><a [routerLink]=\"['Home']\">{{app_name}}</a></div>\n    \n      <div class=\"right_menu\">\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\" [hidden] = \"logged_in\">\n          <span>{{username_label}}<input ngControl=\"username\" type=\"text\"></span>\n          <span>{{password_label}}<input ngControl=\"password\" type=\"password\"></span>\n          <button type=\"submit\" class=\"btn\">{{log_in_label}}</button>\n        </form>\n      </div>\n    <pre>sent : {{data}}\n    received : {{resp}} </pre>\n    <router-outlet></router-outlet>\n  </div>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/profile',
                            name: 'Profile',
                            component: profile_component_1.ProfileComponent,
                        },
                        {
                            path: '/home',
                            name: 'Home',
                            component: home_component_1.HomeComponent,
                        },
                        {
                            path: '/register',
                            name: 'Register',
                            component: register_component_1.RegisterComponent,
                        },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map