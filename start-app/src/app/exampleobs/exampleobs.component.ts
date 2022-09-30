import { Component, OnInit } from "@angular/core";
import { ExampleobsService } from "../providers/exampleobs.service";

@Component({
  selector: "app-exampleobs",
  templateUrl: "./exampleobs.component.html",
  styleUrls: ["./exampleobs.component.css"],
})
export class ExampleobsComponent implements OnInit {
  example: any;

  constructor(private exampleobs: ExampleobsService) {}

  ngOnInit() {
    this.exampleobs.getExample().subscribe((data) => {
      this.example = data.value;
      console.dir(data);
    });
  }
}
