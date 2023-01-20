import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AddDepartmentsService}  from '../.././add-departments.service';



@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  allDepartments: any;
  constructor(private http:HttpClient , private department:AddDepartmentsService) { }

  ngOnInit(): void {
    this.getAllDepartments();
  }

  getAllDepartments(){
    this.department.getDepartment().subscribe(res=>{
    this.allDepartments = res;
    })
      
    }

    deleteDepartments(data:any){
      this.http.delete('http://localhost:3000/departments/'+data).subscribe()
      this.getAllDepartments();
    }

    // Redc:string='color:red;';
    // Greenc:string='color:green;'
    // apidep(){
    //   this.department.getDepartment()
    // }
  }


