import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUsersComponent } from './github-users.component';
import { GithubService } from "../../core/services/github.service";
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from "./user-card/user-card.component";

describe('GithubUsersComponent', () => {
  let component: GithubUsersComponent;
  let fixture: ComponentFixture<GithubUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubUsersComponent, UserCardComponent ],
      providers: [ GithubService ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
