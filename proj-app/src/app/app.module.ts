import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { StoryCardComponent } from './components/story-card/story-card.component';
import { HomeComponent } from './home/home.component';
import { OpencardComponent } from './opencard/opencard.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { TimeCardComponent } from './components/time-card/time-card.component';
import { DoneComponent } from './components/done/done.component';
import { DoingCardComponent } from './components/doing-card/doing-card.component';
import { OpentimeComponent } from './components/opentime/opentime.component';
import { SprintpageComponent } from './components/sprintpage/sprintpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { AddCardComponent } from './add-card/add-card.component';
import { OpenTaskCardComponent } from './components/open-task-card/open-task-card.component';
import { ContributionComponent } from './components/contribution/contribution.component';
import { UsersComponent } from './users/users.component';
import { DatabaseService } from './database.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskCardComponent,
    NavbarComponent,
    MainLayoutComponent,
    StoryCardComponent,
    HomeComponent,
    OpencardComponent,
    MemberCardComponent,
    TimeCardComponent,
    DoneComponent,
    DoingCardComponent,
    OpentimeComponent,
    SprintpageComponent,
    LoginpageComponent,
    ToDoComponent,
    AddMemberComponent,
    AddCardComponent,
    OpenTaskCardComponent,
    ContributionComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
