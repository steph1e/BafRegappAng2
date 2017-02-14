import { log } from 'util';
import { MembersService } from '../../members.service';
import { Component, OnInit } from '@angular/core';
import { Member } from '../../member';



@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],


})
export class MembersComponent implements OnInit {

  title = 'List of Members';
  members: Member[];
  selectedMember: Member;
  constructor(private membersService: MembersService) { }
  getMember(): void {
    this.membersService.getMember().then(members => this.members = members);
  }
  ngOnInit(): void {
    this.getMember();
    console.log('get member');
  }
  onSelect(member: Member): void {
    this.selectedMember = member;
  }
  editData() {
   
  }
  delete(id){
     this.membersService.delete(id);
    
  }
}