import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../database.service';

declare var name: any;

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
  
})
export class MemberCardComponent implements OnInit {
  memberName = "";
  memberRole = "";
  memberPassword1 = "";
  memberPassword2 = "";
  memberEmail = "";
  memberDescription = "";
  memberContribution = 0;
  
  constructor(private dbService: DatabaseService) {
  }  

  onAddUser () {
    this.memberName = (<HTMLInputElement>document.getElementById("nameInput")).value;
    this.memberRole = (<HTMLInputElement>document.getElementById("roleInput")).value;
    

    this.memberPassword1 = (<HTMLInputElement>document.getElementById("passwordInput-1")).value;
    this.memberPassword2 = (<HTMLInputElement>document.getElementById("passwordInput-2")).value;

    if (this.memberPassword1 != this.memberPassword2) {
      
    }

    this.memberEmail = (<HTMLInputElement>document.getElementById("emailInput")).value

    const user = {name: this.memberName, password: this.memberPassword1, role: this.memberRole, email: this.memberEmail, description: this.memberDescription, contribution: this.memberContribution};
    
    console.log(user);
    console.log("test");
    
  
    this.dbService.createUser(user).subscribe(result => {
      console.log(result);
    });
    
  }

  ngOnInit(): void {
  }  
}
