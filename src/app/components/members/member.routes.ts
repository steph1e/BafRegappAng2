import { MemberDetailsComponent } from '../member-details/member-details.component';
import { Routes } from '@angular/router';

import { MembersComponent }    from './members.component';


// Route Configuration
export const memberRoutes: Routes = [
  { path: 'member', component: MembersComponent },
  { path: 'member/:id', component: MemberDetailsComponent }
];