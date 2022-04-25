export class GithubUserModel {

  constructor(
    public avatar_url: string,
    public login: string,
    public type: string,
    public score: number,
    public html_url: string
  ) { }
}
