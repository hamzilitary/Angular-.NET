import { Component, EventEmitter, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ToDo } from './models/to-do.model';
import { TaskService } from './services/task.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Weather Or Not';
  constructor() {
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
}
