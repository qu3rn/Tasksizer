import { Component, OnInit } from '@angular/core';
import { Task } from './../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  tasks !: Task[];

  constructor() { }

  ngOnInit(): void {
    this.tasks = [
      {
        content: 'First task',
        completed: false
      },
      {
        content: 'Second task',
        completed: false
      },
      {
        content: 'Third task',
        completed: false
      }
    ];
  }

}
