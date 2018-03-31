import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {TaskService} from '../task.service';
import {Step} from '../step';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent implements OnInit {
  category: String;
  name: String;
  description: String;
  end_date: Date;
  cats: Array<String> = ['Test', 'Test2'];

  constructor(
    private _taskService: TaskService,
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeModal(): void {
    this.dialogRef.close();
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.cats.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))

  ngOnInit() {
  }

  createTask() {
    const task = {
      name: this.name,
      description: this.description,
      end_date: new Date(this.end_date),
      added_date: new Date(),
      category: this.category,
      completion: 0,
      finished: false,
      steps: null
    };
    this._taskService.createTask(task);
    this.dialogRef.close();
  }

}
