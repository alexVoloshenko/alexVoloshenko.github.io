import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.less']
})
export class ClockComponent implements OnInit {
  public date;
  public shortTime = true;
  public newTime: Date;
  public options: object;
  public interval;

  constructor() {
    this.date = new Date();
    this.options = {hour: '2-digit', minute: '2-digit'};
    this.newTime = this.date.toLocaleString('ua-UA', this.options);
  }

  ngOnInit() {
  }

  changeTime() {
    if (this.shortTime) {
      clearInterval(this.interval);
      this.date = new Date();
      this.newTime = this.date.toLocaleString('ua-UA', this.options);
      this.shortTime = false;
    } else {
      this.interval = setInterval(() => {
        this.date = new Date();
        this.newTime = this.date.toLocaleString('ua-UA', {hour: '2-digit', minute: '2-digit', second: '2-digit'});
      });
      this.shortTime = true;
    }
  }
}
