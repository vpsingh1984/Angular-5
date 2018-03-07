import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

public employeeList = [];
public error = "";

  constructor(private _employeeService : EmployeesService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(res=>{
        this.employeeList = res;
        console.log(this.employeeList);
        //thiss
      },err=>{
        this.error = err;
        // console.log(this.error.message);
        // console.log(this.error.status);
        // console.log(this.error.statusText);
      });

  }

}
