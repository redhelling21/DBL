import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() title: String;
  @Input() desc: String;
  @Input() completion: number;
  @Input() duration: String;

  constructor() { }

  ngOnInit() {
  }

  getColorCompletion() {
    if (this.completion < 70) {
      return '#30cc2e6b';
    } else if (this.completion < 90) {
      return '#ffbc006b';
    } else {
      return '#ff00006b';
    }
  }

}
