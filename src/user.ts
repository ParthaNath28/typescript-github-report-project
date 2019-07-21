import { Repo } from "./Repo";

export class User{
    private login: string;
    private fullName: string;
    private repoCount: number;
    private followerCount: number;
    private repos?: Repo[];

    constructor(userResponse: any){
        this.followerCount = userResponse.followers;
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        //this.repos = [];
    }

    public setRepos(repos: Repo[]){
        this.repos=repos;
    }

    public getRepos(){
        return this.repos;
    }

}