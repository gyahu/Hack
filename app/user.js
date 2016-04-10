System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(name, email, phone, address, medicalConsiderations) {
                    this.name = name;
                    this.email = email;
                    this.phone = phone;
                    this.address = address;
                    this.medicalConsiderations = medicalConsiderations;
                    this.spanish = false;
                    this.english = false;
                    this.portuguese = false;
                    this.tourist = false;
                    this.guide = false;
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map