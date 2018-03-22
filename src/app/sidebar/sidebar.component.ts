import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  screenSizeClass: String = 'bar-large';

  constructor(private zone: NgZone) {
    let mq = window.matchMedia('(max-width:767px)');
    if (mq.matches) {
      this.screenSizeClass = 'bar-small';
    }
    matchMedia('(max-width:767px)').addListener((mql => {
      if (mql.matches) {
        this.zone.run(() => {
          this.screenSizeClass = 'bar-small';
        });
      }
    }));
    matchMedia('(min-width:768px)').addListener((mql => {
      if (mql.matches) {
        this.zone.run(() => {
          this.screenSizeClass = 'bar-large';
        });
      }
    }));
  }

  ngOnInit() {

  }

  toggleSizeBar() {
    if(this.screenSizeClass === 'bar-large'){
      this.screenSizeClass = 'bar-small';
    } else {
      this.screenSizeClass = 'bar-large';
    }
  }

}
