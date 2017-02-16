import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './components/members/members.component';
import { MembersService } from './members.service';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AddMemberComponent } from './components/add-member/add-member.component';
import { DatePickerModule } from 'ng2-datepicker';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
//import { routing } from './app.routes';
import { Member } from './member';


const appRoutes: Routes = [
  { path: 'members', component: MembersComponent },
  { path: 'add-member', component: AddMemberComponent },
  { path: 'member-details', component: MemberDetailsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    NavbarComponent,
  
    AddMemberComponent,
    MemberDetailsComponent,
     ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    //routing
  ],
  providers: [MembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
