import { Component } from '@angular/core';
import { MembersComponent } from './components/members/members.component';
import { MembersService } from './members.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { Member } from './member';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [MembersService]
})
export class AppComponent { }
