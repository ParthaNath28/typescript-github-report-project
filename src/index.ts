import {GithubAPIService} from './GithubAPIService';
import { User } from './user';
import { Repo } from './Repo';
import * as _ from 'lodash';

let svc = new GithubAPIService();

if(process.argv.length <3){
    console.log("Please provide the username in command line");
}

else{
    let userName = process.argv[2];
    svc.getUserInfo(userName,(user: User)=>{
        svc.getRepos(userName, (repos: Repo[])=>{
            let sortedRepos = _.sortBy(repos, [(repo: Repo)=> repo.getSize() * -1]); // Sorting the repos based on their size in descending order
            let filteredRepos = _.take(sortedRepos, 3);
            user.setRepos(filteredRepos);
            console.log(user)
        })
    });
}





