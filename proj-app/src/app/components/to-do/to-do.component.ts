import { Component, OnInit } from '@angular/core';
import { Storycard } from 'src/app/stored-data/Storycard'
import { TODO_TASKS } from 'src/app/stored-data/data-todo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  todo_task: Storycard[] = TODO_TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
