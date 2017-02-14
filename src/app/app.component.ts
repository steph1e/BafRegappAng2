import { Component } from '@angular/core';
import { MembersComponent } from './components/members/members.component';
import { MembersService } from './members.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MemberDetailsComponent } from './components/member-details/member-details.component'
import { Member } from './member';
import { AddMemberComponent } from './components/add-member/add-member.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [MembersService]
})
export class AppComponent {


 }
