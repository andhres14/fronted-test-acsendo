import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ErrorCatchingInterceptor } from "./core/interceptors/error-catching.interceptor";

import { AppComponent } from './app.component';
import { UserCardComponent } from './components/github-users/user-card/user-card.component';
import { GithubUsersComponent } from './components/github-users/github-users.component';

import { ScorePipe } from './shared/pipes/score.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ScorePipe,
    UserCardComponent,
    GithubUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorCatchingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
