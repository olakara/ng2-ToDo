import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { ToDoService } from '../../to-do.service';
@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']  
})
export class ListComponent implements OnInit {
  
  constructor(private service:ToDoService ) {}

  ngOnInit() {
  }
  
  GetTasks() {    
    return this.service.getTasks();
  }
  
  OnTaskDelete(task:Task) {
    this.service.removeTask(task);
  }

}
