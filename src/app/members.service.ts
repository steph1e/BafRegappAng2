import { MembersComponent } from './components/members/members.component';
import { Injectable } from '@angular/core';

@Injectable()
export class MembersService {
  private memberz = MembersComponent.FavouriteMembers.slice(0);

getAllMembers(): MembersComponent []{
  return this.memberz.slice(0);
}
  constructor() { }

}
