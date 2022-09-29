import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "start-app";
  today = "";
  userName: string = "";

  ngOnInit() {
    this.today = new Date().toLocaleString();
  }

  receivedUserNameEvent(e) {
    this.userName = e;
    console.log(this.userName);
  }
}
