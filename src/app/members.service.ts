import { MEMBERS } from './mock-members';
import { MembersComponent } from './components/members/members.component';
import { Injectable } from '@angular/core';
import { Member } from './member';

@Injectable()
export class MembersService {
 
getMember(): Promise<Member[]> {
    return Promise.resolve(MEMBERS);
  }
delete(id): Promise<Member>{
   for(let i = 0; i < MEMBERS.length; i++) {
     if(MEMBERS[i].id == id){
     Promise.resolve(MEMBERS.splice(i, 1));
     }
   }
    return Promise.reject('member with id ' + id + ' does not exist');
}
  constructor() { }

}
