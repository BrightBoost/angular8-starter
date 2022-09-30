import { Component, OnInit } from "@angular/core";
import { Saying } from "../models/saying.model";
import { SayingsService } from "../providers/sayings.service";

@Component({
  selector: "app-sayings",
  templateUrl: "./sayings.component.html",
  styleUrls: ["./sayings.component.css"],
})
export class SayingsComponent implements OnInit {
  sayings: Array<Saying> = [];
  showSayings: boolean = false;
  constructor(private sayingsService: SayingsService) {
    // load the sayings
    // generate table markup
  }

  onShowClicked() {
    this.showSayings = true;
  }

  ngOnInit() {
    this.sayings = this.sayingsService.getSayings();
  }
}
