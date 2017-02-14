import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MembersComponent } from './components/members/members.component';
import { MembersService } from './members.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    NavbarComponent,
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
