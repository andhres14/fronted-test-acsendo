import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { map, Observable } from "rxjs";
import { responseGithub } from "../interfaces/general-interfaces";
import { GithubUserModel } from "../models/github-user.model";


const { GITHUB_API } = environment;

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  constructor(private http: HttpClient) {
  }

  /**
   * Servicio encargado de obtener los usuarios de la API de github
   * @param filter termino de busqueda
   */
  getGithubUsersByFilter(filter?: string): Observable<GithubUserModel[]> {
    const params = new HttpParams()
      .append('q', filter || '')
      .append('per_page', '100');
    return this.http.get<responseGithub>(`${ GITHUB_API }search/users`, { params })
      .pipe(
        map(resp => resp.items
          .map(user => new GithubUserModel(
            user.avatar_url,
            user.login,
            user.type,
            user.score,
            user.html_url
          )))
      )
  }
}
