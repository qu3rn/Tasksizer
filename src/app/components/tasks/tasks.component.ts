import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

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
        completed: true
      }
    ];
  }

}
