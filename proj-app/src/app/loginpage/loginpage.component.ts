import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { range } from 'rxjs';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  userDB: any[] = [];
  memberEmail = "";
  memberPassword = "";

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogIn () {
    this.memberEmail = (<HTMLInputElement>document.getElementById("floatingInput")).value
    this.memberPassword = (<HTMLInputElement>document.getElementById("floatingPassword")).value;
    console.log(this.memberEmail)
    console.log(this.memberPassword)
    this.onGetUsers()
    for (let i = 0; i < this.userDB.length; i++) {
      if (this.userDB[i].email == this.memberEmail && this.userDB[i].password == this.memberPassword) {
        console.log("correct credentials")
        this.router.navigateByUrl('sprintpage')
        return 0
      }
    }
    console.log("incorrect credentials")
    return 0
  }
  onGetUsers() {
    this.dbService.getUsers().subscribe((data: any) =>{
      this.userDB = data;
    })
  }

}
