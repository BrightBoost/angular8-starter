import { Component, Input, OnInit } from "@angular/core";
import { DateService } from "../providers/date.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent implements OnInit {
  empName: string = "";

  updateEmployee(lastname: string): string {
    this.empName = this.empName + lastname;
    return this.empName;
  }
  constructor() {}

  ngOnInit() {}
}
