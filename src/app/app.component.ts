import { Component } from '@angular/core';
import { MembersComponent } from './components/members/members.component';
import { MembersService } from './members.service'
import { NavbarComponent } from './components/navbar/navbar.component'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [MembersService]
})
export class AppComponent { }
