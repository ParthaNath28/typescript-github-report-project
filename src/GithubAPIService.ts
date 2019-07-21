import * as request from 'request';
import { User } from './user';
import { Repo } from './Repo';

const OPTIONS : any = {
    headers: {
        'User-Agent':'request'
    }
    ,
    json : true
}

export class GithubAPIService{
    getUserInfo(userName : string, callBack: (user: User)=> any){
    /* Callback function as parameter */    
        
        request.get('https://api.github.com/users/'+userName,OPTIONS, (error: any , response: any, body: any) =>{
            let user = new User(body);
            callBack(user); //Callback execution
        });
    }

    getRepos(userName : string, callBack: (repos: Repo[])=> any){

        request.get('https://api.github.com/users/'+userName+'/repos',OPTIONS, (error: any , response: any, body: any) =>{
            let repoArray =  body;
            callBack(body.map((repo: any) => new Repo(repo)));
        });

    }
}