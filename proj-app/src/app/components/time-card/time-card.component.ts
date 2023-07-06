import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { concatMapTo } from 'rxjs';

@Component({
  selector: 'app-time-card',
  templateUrl: './time-card.component.html',
  styleUrls: ['./time-card.component.css']
})
export class TimeCardComponent implements OnInit {

  your_con:number=0;
  team_con:number=0;
  newtime:number=0;
  selection:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  updateYourTime(){
    this.newtime = parseInt(((<HTMLInputElement>document.getElementById("time")).value));
    this.selection = parseInt(((<HTMLInputElement>document.getElementById("selecttime")).value));
    let check= Number.isInteger(this.newtime) 
    let check1 = Number.isInteger(this.selection)
    if (check==false){
      this.newtime = 0
    }
    if (check1== false ){
      this.selection = 0
    }
    this.your_con += this.newtime+this.selection;
    this.team_con += this.newtime+this.selection;

  }
  saveTime(){

  }
}
