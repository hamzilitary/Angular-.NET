import { Component, EventEmitter } from '@angular/core';
import { ToDo } from '../models/to-do.model';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { TaskService } from '../services/task.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: []
})

export class HomepageComponent   {
  //tasks: any;
  
  //filterBySuggest: string = "All Tasks";
  //filtered: boolean = false;
  //constructor(private taskService: TaskService, private router: Router) { }

  ////get filteredTasks() {
  ////  if (!this.filtered) {
  ////    return this.tasks;
  ////  }
  ////  let filterFunc = function (task) {
  ////    return (task.suggest && this.filterBySuggest === 'Suggested') || !task.suggest
  ////  };
  ////  return this.tasks.flatMap(t => t).filter<any>(filterFunc);
  ////}
  //ngOnInit() {
  //  this.tasks = this.taskService.getTasks();
  //}

  //goToDetail(clicked) {
  //  this.router.navigate(['tasks', clicked.$key]);
  //}



  //setFilterCategory(suggest: string) {
  //  this.filterBySuggest = suggest;
  //  this.filtered = true;
  //}

  //resetFilterCategory() {
  //  this.filterBySuggest = 'All Tasks'
  //  this.filtered = false;
  //}






}
