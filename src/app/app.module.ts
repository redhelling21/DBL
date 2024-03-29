import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AllTaskComponent } from './all-task/all-task.component';
import {TaskService} from './task.service';
import {HttpModule} from '@angular/http';
import {MatDatepickerModule, MatDialog, MatDialogModule, MatNativeDateModule} from '@angular/material';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    HomeComponent,
    ProgressBarComponent,
    AllTaskComponent,
    TaskDialogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    environment.production ? ServiceWorkerModule.register('./ngsw-worker.js') : []
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
  entryComponents: [
    TaskDialogComponent,
  ]
})
export class AppModule { }
