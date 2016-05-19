import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { Task } from '../../task';
import { ToDoService } from '../../to-do.service';

@Component({
  moduleId: module.id,
  selector: 'app-create',
  templateUrl: 'create.component.html',
  styleUrls: ['create.component.css'] ,
  providers: [ToDoService] 
})
export class CreateComponent implements OnInit {
  title:string;
  constructor(private service:ToDoService ) {}
  
  ngOnInit() {
    
  }
  
  OnAddTask() {    
    
    console.log(this.title);
    var task = new Task();
    
    task.title = this.title;
    task.done = false;
    
    this.service.addTask(task);
    this.title = '';
  }

}
