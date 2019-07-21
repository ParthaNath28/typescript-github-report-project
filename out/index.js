"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubAPIService_1 = require("./GithubAPIService");
var _ = __importStar(require("lodash"));
var svc = new GithubAPIService_1.GithubAPIService();
if (process.argv.length < 3) {
    console.log("Please provide the username in command line");
}
else {
    var userName_1 = process.argv[2];
    svc.getUserInfo(userName_1, function (user) {
        svc.getRepos(userName_1, function (repos) {
            var sortedRepos = _.sortBy(repos, [function (repo) { return repo.getSize() * -1; }]); // Sorting the repos based on their size in descending order
            var filteredRepos = _.take(sortedRepos, 3);
            user.setRepos(filteredRepos);
            console.log(user);
        });
    });
}
