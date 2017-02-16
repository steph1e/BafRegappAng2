import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../members.service';
import { Member} from '../../member'

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {


 private sub:any;
  private member:string[];

  constructor(private meberService: MembersService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
