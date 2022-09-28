import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-eventdemo",
  templateUrl: "./eventdemo.component.html",
  styleUrls: ["./eventdemo.component.css"],
})
export class EventdemoComponent implements OnInit {
  title = "Event Demo";
  onButton1Clicked(e): void {
    alert("Red button was clicked");
    console.dir(e);
  }
  onButton2Clicked(): void {
    alert("Green button was clicked");
  }
  onButton3Clicked(): void {
    alert("Blue button was clicked");
  }
  constructor() {}

  ngOnInit() {}
}
