export class Repo{
    private name: string;
    private description: string;
    private url: string;
    private size: number;
    private forkCount: number;

    constructor(repo: any){
        this.description = repo.description;
        this.name = repo.name;
        this.url = repo.html_url;
        this.size = repo.size;
        this.forkCount = repo.forks;
    }

    public getSize(){
        return this.size;
    }
}