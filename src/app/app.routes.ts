import { AppComponent } from './app.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { MembersComponent } from './components/members/members.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { memberRoutes } from './components/members/member.routes';

// Route Configuration
export const routes: Routes = [
    {
    path: '',
    component: AppComponent
  },
  { path: 'member', component: MembersComponent},
  { path: 'member-details', component: MemberDetailsComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);