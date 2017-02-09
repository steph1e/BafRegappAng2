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
    surname: "V Rooyen",
    age:23
  },
    {
      id:32,
      name: "Stephania",
      surname: "Bontsi",
      age:26
    },
    {
      id: 54,
      name: "Benita",
      surname: "George",
      age:45
    }];
   

  constructor() { }

  ngOnInit() {
  }

}
