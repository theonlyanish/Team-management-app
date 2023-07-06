import { Component, OnInit } from '@angular/core';
import { Storycard } from 'src/app/stored-data/Storycard'
import { TODO_TASKS } from 'src/app/stored-data/data-todo';

@Component({
  selector: 'app-doing-card',
  templateUrl: './doing-card.component.html',
  styleUrls: ['./doing-card.component.css']
})
export class DoingCardComponent implements OnInit {
  
  // doing_task: Storycard[] = DOING_TASKS;
  todo_task: Storycard[] = TODO_TASKS;

  constructor() { }

  ngOnInit(): void {
  }
}
