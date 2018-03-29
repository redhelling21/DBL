import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {TaskDialogComponent} from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openTaskDialog(): void {
    let dialogRef = this.dialog.open(TaskDialogComponent, {
      data: { name: 'titre'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  ngOnInit() {
  }

}
