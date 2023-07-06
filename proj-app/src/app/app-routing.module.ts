import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OpentimeComponent } from './components/opentime/opentime.component';
import { SprintpageComponent } from './components/sprintpage/sprintpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AddMemberComponent } from './add-member/add-member.component';
import {AddCardComponent} from './add-card/add-card.component';
import { OpencardComponent } from './opencard/opencard.component';
import { ContributionComponent } from './components/contribution/contribution.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-card', component: AddCardComponent},
  { path: 'add-member', component:AddMemberComponent},
  { path: 'opentime', component:OpentimeComponent},
  { path: "" ,component:LoginpageComponent},
  { path: "sprintpage" , component:SprintpageComponent},
  { path: "opencard",component:OpencardComponent},
  { path: "contribution", component:ContributionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
