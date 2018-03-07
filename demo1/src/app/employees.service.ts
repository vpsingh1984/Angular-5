import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeesService {
  private url: string = "/assets/data/employee.json";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url);
    // return [
    //   {"id": 1, "name":"Vijay Pratap Singh", "Project": "Hilti"},
    //   {"id": 2, "name":"Sindhu Singh", "Project": "Disa"},
    //   {"id": 3, "name":"Ranveer Kapoor", "Project": "Pierson"},
    // ]
  }
}
