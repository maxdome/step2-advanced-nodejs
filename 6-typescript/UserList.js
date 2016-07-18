"use strict";
var UserList = (function () {
    function UserList() {
        this.users = [];
    }
    UserList.prototype.addUser = function (user) {
        this.users.push(user);
        return this;
    };
    UserList.prototype.toString = function () {
        return this.users
            .map(function (user) { return user.toString(); })
            .join('\n');
    };
    return UserList;
}());
exports.__esModule = true;
exports["default"] = UserList;
//# sourceMappingURL=UserList.js.map