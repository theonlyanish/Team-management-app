import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../database.service';
import { Storycard } from 'src/app/stored-data/Storycard';
import { TODO_TASKS } from 'src/app/stored-data/data-todo';
import { ThisReceiver } from '@angular/compiler';
import { urlencoded } from 'express';
import { Comments } from 'src/app/stored-data/Storycard';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {
  taskName = "";
  taskSprint = "";
  taskDescription = "";
  taskMembers: any[] = [];
  new_member = "";
  taskURL = "";
  taskStatus = "";
  taskComments: any[] = [];
  taskContribution = 0;
  
  
  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
  }

  saveMember() {
    this.new_member = (<HTMLInputElement>document.getElementById("titleInput")).value;
    this.taskMembers.push(this.new_member);
  }

  saveCard(){
    /*
    let title:string = (<HTMLInputElement>document.getElementById("titleInput")).value;
    let description:string = (<HTMLInputElement>document.getElementById("descriptionInput")).value;
    let id = parseInt(TODO_TASKS[TODO_TASKS.length - 1].id,10)+1;
    let cardStatus:string = (<HTMLInputElement>document.getElementById("cardStatusSelect")).value;
    let comments:string[] = [];
    */
    this.taskName = (<HTMLInputElement>document.getElementById("titleInput")).value;
    //this.taskSprint = 
    this.taskDescription = (<HTMLInputElement>document.getElementById("descriptionInput")).value;
    //this.taskMembers = 
    this.taskURL = (<HTMLInputElement>document.getElementById("thelink")).value;
    this.taskStatus = (<HTMLInputElement>document.getElementById("cardStatusSelect")).value;

    /*
    if (typeof title != 'string' && typeof description != 'string') {
      alert('Enter valid title and description')
    }
    else{
      let taskcard_dat:Storycard = {id: id.toString(), title: title, description:description, status:cardStatus, comments:comments};
      TODO_TASKS.push(taskcard_dat);
      console.log(TODO_TASKS[TODO_TASKS.length - 1].id);// testing console log
    }
    */
   const task = {name: this.taskName, sprint: this.taskSprint, description: this.taskDescription, members: this.taskMembers, url: this.taskURL, status: this.taskStatus, comments: this.taskComments, contribution: this.taskContribution};

   console.log(task);

    this.dbService.createTask(task).subscribe(result => {
      console.log(result);
    });
  }
}
