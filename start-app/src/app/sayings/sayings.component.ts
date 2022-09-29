import { Component, OnInit } from "@angular/core";
import { Saying } from "../models/saying.model";

@Component({
  selector: "app-sayings",
  templateUrl: "./sayings.component.html",
  styleUrls: ["./sayings.component.css"],
})
export class SayingsComponent implements OnInit {
  sayings: Array<Saying> = [];
  showSayings: boolean = false;
  constructor() {
    // load the sayings
    // load the sayings
    this.sayings = [
      new Saying("Inspiration", "You're braver than you believe, and stronger than you seem, and smarter than you think."),
      new Saying("Inspiration",  "Nothing is particularly hard if you break it down into small jobs."),
      new Saying("Staying Safe", "An apple a day keeps the doctor away."),
      new Saying("Staying Safe", "A ship in a harbor is safe, but that is not what ships are for."),
      new Saying("Statistics", "He uses statistics as a drunken man uses lamp posts... for support rather than illumination."),
    ];
    // generate table markup
  }
  
  onShowClicked() {
    this.showSayings = true;
  }

  ngOnInit() {}
}
