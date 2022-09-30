import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { SayingsService } from "../providers/sayings.service";

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

  constructor(private sayingsService: SayingsService) {
    // load the sayings
    this.sayings = this.sayingsService.getSayings();
    this.categories = this.sayingsService.getCategories();
    
  }
  
  onSelectSaying(event): void {
    let selectedCategory = event.target.value;
    if ((selectedCategory == "")) {
      this.matchingSayings = [];
    } else {
      this.matchingSayings = this.sayingsService.getSayingsThatMatchCategory(selectedCategory);
    }
  }

  ngOnInit() {}
}
