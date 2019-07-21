"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var user_1 = require("./user");
var Repo_1 = require("./Repo");
var OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var GithubAPIService = /** @class */ (function () {
    function GithubAPIService() {
    }
    GithubAPIService.prototype.getUserInfo = function (userName, callBack) {
        /* Callback function as parameter */
        request.get('https://api.github.com/users/' + userName, OPTIONS, function (error, response, body) {
            var user = new user_1.User(body);
            callBack(user); //Callback execution
        });
    };
    GithubAPIService.prototype.getRepos = function (userName, callBack) {
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, function (error, response, body) {
            var repoArray = body;
            callBack(body.map(function (repo) { return new Repo_1.Repo(repo); }));
        });
    };
    return GithubAPIService;
}());
exports.GithubAPIService = GithubAPIService;
