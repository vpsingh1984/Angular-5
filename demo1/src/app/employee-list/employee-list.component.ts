import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

public employeeList = [];
// public employeeList = [
//   {"id": 1, "name":"Vijay Pratap Singh", "Project": "Hilti"},
//   {"id": 2, "name":"Sindhu Singh", "Project": "Disa"},
//   {"id": 3, "name":"Ranveer Kapoor", "Project": "Pierson"},
// ]


  constructor(private _employeeService : EmployeesService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employeeList = data);
    console.log(this.employeeList);
  }

}
