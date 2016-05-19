import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ToDoAppComponent } from '../app/to-do.component';

beforeEachProviders(() => [ToDoAppComponent]);

describe('App: ToDo', () => {
  it('should create the app',
      inject([ToDoAppComponent], (app: ToDoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'to-do works!\'',
      inject([ToDoAppComponent], (app: ToDoAppComponent) => {
    expect(app.title).toEqual('to-do works!');
  }));
});
