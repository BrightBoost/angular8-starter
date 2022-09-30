import { Component, OnInit } from '@angular/core';
import { DateService } from '../providers/date.service';

@Component({
  selector: 'app-date-display',
  templateUrl: './date-display.component.html',
  styleUrls: ['./date-display.component.css']
})
export class DateDisplayComponent implements OnInit {

  startingDate: Date;
  todaysDate: Date;
  endDate: Date;

  constructor(private dateService: DateService) { }

  ngOnInit() {
    this.startingDate = this.dateService.startDate();
    this.todaysDate = this.dateService.todaysDate();
    this.endDate = this.dateService.endDate();
  }

}
