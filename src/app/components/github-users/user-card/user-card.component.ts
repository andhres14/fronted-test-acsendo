import { Component, Input, OnInit } from '@angular/core';
import { GithubUserModel } from 'src/app/core/models/github-user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: GithubUserModel;
  constructor() { }

  ngOnInit(): void {
  }

}
