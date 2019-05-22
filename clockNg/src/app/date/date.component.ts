import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.less']
})
export class DateComponent implements OnInit {
  public date;
  public uaDate = true;
  public newDate: Date;
  public options: object;

  constructor() {
    this.date = new Date();
    this.options = {year: 'numeric', month: 'numeric', day: 'numeric'};
    this.newDate = this.date.toLocaleString('ua-UA', this.options);
  }

  ngOnInit() {
  }

  changeDate() {
    if (this.uaDate) {
      this.newDate = this.date.toLocaleString('ua-UA', this.options);
      this.uaDate = false;
    } else {
      this.newDate = this.date.toLocaleString('en-US', this.options);
      this.uaDate = true;
    }
  }
}
