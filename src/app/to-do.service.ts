import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class ToDoService {
  tasks: Task[] = [];
  constructor() {
    
  }
  addTask(task: Task) {
    this.tasks.push(task)
  }
  removeTask(task:Task) {
    var pos = this.tasks.indexOf(task);
    if(pos > -1) {
      this.tasks.splice(pos,1);
    }
  }
  getTasks() {
    return this.tasks;
  }
}
