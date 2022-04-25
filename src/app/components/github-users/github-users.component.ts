import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GithubService } from "../../core/services/github.service";
import { GithubUserModel } from "../../core/models/github-user.model";
import { debounceTime, distinctUntilChanged, filter, fromEvent, map } from "rxjs";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: [ './github-users.component.css' ]
})
export class GithubUsersComponent implements OnInit {

  @ViewChild('usersSearchInput', { static: true }) usersSearchInput: ElementRef;

  public sending: boolean = false;
  public users: GithubUserModel[] = [];

  constructor(private _githubService: GithubService) {
  }

  ngOnInit(): void {
    fromEvent(this.usersSearchInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(1000),
        distinctUntilChanged()
      ).subscribe((text: string) => {
        if (text.length >= 3) {
          this.getUsers(text);
        } else {
          this.users = [];
        }
      });
  }

  /**
   * Encargado de realizar la búsqueda de usuarios
   * @param textFilter filtro de usuarios
   * @author Andres Buitrago
   */
  getUsers(textFilter: string) {
    this.sending = true;
    this._githubService.getGithubUsersByFilter(textFilter)
      .subscribe((resp: GithubUserModel[]) => {
        this.users = resp;
        this.sending = false;
      }, err => {
        this.sending = false;
      })
  }

}
