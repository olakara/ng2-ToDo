import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class ToDoService {
  tasks: Task[] = [];
  constructor() {
    console.log('Running Service constuctor...'); 
  }
  addTask(task: Task) {
    this.tasks.push(task)
  }
  getTasks() {
    return this.tasks;
  }
}
