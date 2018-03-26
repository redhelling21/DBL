import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {Task} from '../task';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  styleUrls: ['./all-task.component.css']
})
export class AllTaskComponent implements OnInit {
  tasks: Array<Task>;
  constructor(private _taskService: TaskService) {
    // Access the Task Service's getTasks() method we defined
    this._taskService.getAllTasks()
      .subscribe(res => this.tasks = res);
  }

  ngOnInit() {
  }

}
