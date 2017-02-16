import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { MembersComponent } from './components/members/members.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route Configuration
export const routes: Routes = [
  { path: 'member', component: MembersComponent},
  { path: 'member-details', component: MemberDetailsComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);