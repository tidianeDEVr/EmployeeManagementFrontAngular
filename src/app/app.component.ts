import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models/employee';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public employees: Employee[] | undefined;
  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.getEmployees();
  }
  public getEmployees(): void{
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      }, 
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
