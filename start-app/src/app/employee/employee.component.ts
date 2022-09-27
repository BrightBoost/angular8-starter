import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empName: string = "Maaike";

  updateEmployee(lastname: string): string {
    this.empName = this.empName + lastname;
    return this.empName;
  }
  constructor() { }

  ngOnInit() {
  }

}
