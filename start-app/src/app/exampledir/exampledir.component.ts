import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exampledir",
  templateUrl: "./exampledir.component.html",
  styleUrls: ["./exampledir.component.css"],
})
export class ExampledirComponent implements OnInit {
  layout = {};
  styleLayout = {};
  show: boolean = false;
  constructor() {}

  ngOnInit() {
    this.layout = {
      "text-danger": false,
      "text-success": false,
    };
    this.styleLayout = {
      "background-color": "pink",
      "font-family": "times new roman",
    };
  }
}
