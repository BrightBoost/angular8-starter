import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-matchsaying",
  templateUrl: "./matchsaying.component.html",
  styleUrls: ["./matchsaying.component.css"],
  //encapsulation: ViewEncapsulation.None
})
export class MatchsayingComponent implements OnInit {
  categories: Array<string> = [];
  sayings: Array<any> = [];
  matchingSayings: Array<any> = [];

  constructor() {
    this.categories = ["Inspiration", "Staying Safe", "Statistics"];
    // load the sayings
    this.sayings = [
      {
        category: "Inspiration",
        quote:
          "You're braver than you believe, and stronger than you seem, and smarter than you think.",
      },
      {
        category: "Inspiration",
        quote:
          "Nothing is particularly hard if you break it down into small jobs.",
      },
      {
        category: "Staying Safe",
        quote: "An apple a day keeps the doctor away.",
      },
      {
        category: "Staying Safe",
        quote:
          "A ship in a harbor is safe, but that is not what ships are for.",
      },
      {
        category: "Statistics",
        quote:
          "He uses statistics as a drunken man uses lamp posts... for support rather than illumination.",
      },
    ];
  }
  
  onSelectSaying(event): void {
    let selectedCategory = event.target.value;
    if ((selectedCategory == "")) {
      this.matchingSayings = [];
    } else {
      this.matchingSayings = this.sayings.filter(
        (s) => s.category == selectedCategory
      );
    }
  }

  ngOnInit() {}
}
