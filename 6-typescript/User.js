"use strict";
var User = (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.toString = function () {
        return "Name: " + this.name;
    };
    return User;
}());
exports.__esModule = true;
exports["default"] = User;
//# sourceMappingURL=User.js.map