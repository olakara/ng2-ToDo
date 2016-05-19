import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ToDoService } from './to-do.service';

describe('ToDo Service', () => {
  beforeEachProviders(() => [ToDoService]);

  it('should ...',
      inject([ToDoService], (service: ToDoService) => {
    expect(service).toBeTruthy();
  }));
});
