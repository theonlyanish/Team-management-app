import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.css']
})
export class ContributionComponent implements OnInit {

  constructor() { }

  total:number=0;
  member:String ="";
  theirtime:number =0 ;
  

  ngOnInit(): void {
  }
  seeTime(){
    var a  =  (((<HTMLInputElement>document.getElementById("membersel")).value));
    this.member = a 
    if (a=="Leader"){
      this.theirtime =100;
      this.total=100;
    }
    else if (a=="Programmer1"){
    this.theirtime=200
    this.total=700;

  }
    else{
      this.theirtime=500
      this.total=10000;

    }

  }
}
  
