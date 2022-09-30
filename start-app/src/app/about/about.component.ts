import { Component, OnInit } from '@angular/core';
import { DateService } from '../providers/date.service';

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor(private dateService: DateService) {}

  ngOnInit() {
    console.log("init about", this.dateService.todaysDate())
  }
}
