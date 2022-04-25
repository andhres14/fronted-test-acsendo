import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { UserCardComponent } from './components/github-users/user-card/user-card.component';
import { GithubUsersComponent } from './components/github-users/github-users.component';

import { ScorePipe } from './shared/pipes/score.pipe';
import { FormsModule } from "@angular/forms";

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
