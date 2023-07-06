import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprintpage',
  templateUrl: './sprintpage.component.html',
  styleUrls: ['./sprintpage.component.css']
})
export class SprintpageComponent implements OnInit {
  
  sprintName:string = 'Sprint Name';
  sprintDescription:string = 'Select to see the sprint activity';

  constructor() { }

  ngOnInit(): void {

  }

  changeSprintName(){
  this.sprintName = (<HTMLInputElement>document.getElementById("sprintNameInput")).value;
}

}
