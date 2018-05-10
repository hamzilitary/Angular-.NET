import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ToDo } from '../models/to-do.model';

@Injectable()
export class TaskService {
  tasks: any;
 
  constructor() {
    
  }

  getTasks() {
    return this.tasks;
  }
  addTask(newTask: ToDo) {
    this.tasks.push(newTask);
    console.log(newTask.$key);
  }

  

}
