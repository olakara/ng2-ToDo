import { Component } from '@angular/core';
import { NavigationComponent } from './shared/navigation';
import { CreateComponent } from './shared/create';
import { ListComponent } from './shared/list';
import { ToDoService } from './to-do.service';

@Component({
  moduleId: module.id,
  selector: 'to-do-app',
  templateUrl: 'to-do.component.html',
  styleUrls: ['to-do.component.css'],
  directives: [ NavigationComponent, CreateComponent, ListComponent]
})
export class ToDoAppComponent {
  title = 'To Do';
}
