import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
members = [ {
    id:23,
    name: "Wesley",
    surname: "V Rooyen"},
    {
      id:32,
      name: "Stephania",
      surname: "Bontsi"
    },
    {
      id: 54,
      name: "Benita",
      surname: "George"
    }];
   

  constructor() { }

  ngOnInit() {
  }

}
