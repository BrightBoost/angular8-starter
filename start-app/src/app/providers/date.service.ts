import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class DateService {
  randomValue: number;

  constructor() {
    this.randomValue = Math.random() * 100;
    console.log(this.randomValue, "new object created")
  }

  startDate(): Date {
    let start = new Date("12/7/2020");
    return start;
  }
  todaysDate(): Date {
    let today = new Date();
    return today;
  }
  endDate(): Date {
    let ending = new Date("12/18/2020");
    return ending;
  }
}
