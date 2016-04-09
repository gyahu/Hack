System.register(['angular2/core', './home.component', './menu.component', './profile.component', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, home_component_1, menu_component_1, profile_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.app_name = 'THE NAME';
                    this.username_label = 'Username';
                    this.password_label = "Password";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <div id=\"menu\">\n    <div class=\"left_menu\">{{app_name}}</div>\n    <div class=\"right_menu\">\n      <span>{{username_label}}<input type=\"text\"></span>\n      <span>{{password_label}}<input type=\"password\"></span>\n      <button class=\"btn\">Log in</button>\n    </div>\n    <a [routerLink]=\"['Home']\">Home</a>\n    <a [routerLink]=\"['Profile']\">Profile</a>\n    <router-outlet></router-outlet>\n  </div>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES, home_component_1.HomeComponent, menu_component_1.MenuComponent],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/profile',
                            name: 'Profile',
                            component: profile_component_1.ProfileComponent
                        },
                        {
                            path: '/home',
                            name: 'Home',
                            component: home_component_1.HomeComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map