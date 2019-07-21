"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(userResponse) {
        this.followerCount = userResponse.followers;
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        //this.repos = [];
    }
    User.prototype.setRepos = function (repos) {
        this.repos = repos;
    };
    User.prototype.getRepos = function () {
        return this.repos;
    };
    return User;
}());
exports.User = User;
