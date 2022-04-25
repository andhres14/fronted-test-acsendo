import { GithubUserModel } from "../models/github-user.model";

export interface responseGithub {
  total: number;
  incomplete_results:boolean;
  items: GithubUserModel[];
}
