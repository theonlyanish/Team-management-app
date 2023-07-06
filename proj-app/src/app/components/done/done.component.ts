import { Component, OnInit } from '@angular/core';
import { Storycard } from 'src/app/stored-data/Storycard'
import { TODO_TASKS } from 'src/app/stored-data/data-todo';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  todo_task: Storycard[] = TODO_TASKS;
  
  constructor() { }

  ngOnInit(): void {
  }
}

