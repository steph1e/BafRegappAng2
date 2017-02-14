import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MembersComponent } from './components/members/members.component';
import { MembersService } from './members.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { DatePickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    NavbarComponent,
    HomeComponent,
    AddMemberComponent,
     ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
