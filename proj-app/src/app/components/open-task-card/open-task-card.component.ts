import { Component, OnInit } from '@angular/core';
import { TODO_TASKS } from 'src/app/stored-data/data-todo';
import { Comments } from 'src/app/stored-data/Storycard';

@Component({
  selector: 'app-open-task-card',
  templateUrl: './open-task-card.component.html',
  styleUrls: ['./open-task-card.component.css']
})
export class OpenTaskCardComponent implements OnInit {
  
  id = localStorage.getItem('currentID');
  index!:number;
  title!:string;
  description!:string;
  comments: Comments[] = [];
  the_link: string="";
  status!:string;



  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < TODO_TASKS.length; i++) {
      const item = TODO_TASKS[i];
      if (item.id == this.id) {
        this.index = i
        break;
      }
    }

    this.title = TODO_TASKS[this.index].title
    this.description = TODO_TASKS[this.index].description
    this.comments = TODO_TASKS[this.index].comments
    this.status = TODO_TASKS[this.index].status
  }


  deleteCard(){
    console.log(this.id) // Testing log
    let userconsent = confirm('Are you sure you want to delete this card');
    if (userconsent==true){
      TODO_TASKS.splice(this.index,1)
      alert('The card is deleted')
    }
    localStorage.removeItem('currentID')
  }

  closeCard(){
    TODO_TASKS[this.index].title = (<HTMLInputElement>document.getElementById("titleOpenInput")).value;
    TODO_TASKS[this.index].description = (<HTMLInputElement>document.getElementById("descriptionOpenInput")).value;
    TODO_TASKS[this.index].comments = this.comments
    TODO_TASKS[this.index].status = (<HTMLInputElement>document.getElementById("cardMove")).value;
    localStorage.removeItem('currentID');
  }

  addComment(){
    let comment:Comments;
    let com = (<HTMLInputElement>document.getElementById("commentbox")).value;
    let id:number;
    id = parseInt(this.comments[this.comments.length-1].id,10)+1;
    comment = {
      id:id.toString(),
      com:com,
    };

    if(com != ''){
      TODO_TASKS[this.index].comments.push(comment)
    }
    else{
      alert('Enter a Comment to Submit')
    }
  }

  addLink(){
    this.the_link = (<HTMLInputElement>document.getElementById("thelink")).value
   }
  
  moveCard(){
  }

  deleteComment(indexString:string){
    let userconsent = confirm('Are you sure you want to delete this comment');
    if (userconsent==true){
      let index = parseInt(indexString,10)
      this.comments.splice(index,1)
      alert('Comment Deleted')
    }

  }

}
