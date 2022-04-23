import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task, TaskRecords } from '../../models/task';
import { ImmortalDB } from 'immortal-db';

@Component({
  selector: 'app-task',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})

export class TasksComponent implements OnInit {

  tasks !: Task[];

  inputTask:string = "";
   
  constructor() { }

  ngOnInit(): void {
    // dummy hard data
    //
    this.tasks = [
      {
        content: "First task",
        completed: false
      },
      {
        content: "Second task",
        completed: false
      },
      {
        content: "Third task",
        completed: false
      }
    ];
    this.loadData(this.tasks);
  }

  async loadData(tasks?: Task[]) {
    
    //const test = Object.assign( {}, tasks );
    await ImmortalDB.set('tasks', JSON.stringify(tasks) );
    const value = await ImmortalDB.get('tasks');
    console.log(value);
    const test:Task[] = value !== null? JSON.parse(value) : false;
    console.log(test);
  }

  toggleDone(id:number) {
    this.tasks.map((v, i) => {
      if(i == id) v.completed = !v.completed;

      return v;
    });
  }

  deleteTask(id:number) {
    this.tasks = this.tasks.filter((v, i) => i !== id);
  }

  addTask(addTaskForm: NgForm) {
    if( this.inputTask === '') return;
    this.tasks.push({
      content: this.inputTask,
      completed: false
    });

    addTaskForm.resetForm();
  }

}
