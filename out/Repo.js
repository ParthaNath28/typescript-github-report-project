"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(repo) {
        this.description = repo.description;
        this.name = repo.name;
        this.url = repo.html_url;
        this.size = repo.size;
        this.forkCount = repo.forks;
    }
    Repo.prototype.getSize = function () {
        return this.size;
    };
    return Repo;
}());
exports.Repo = Repo;
