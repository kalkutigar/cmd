import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {departmentModel} from './add-department.model';
import {AddDepartmentsService}  from '../.././add-departments.service'


@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent implements OnInit {
  formValue !: FormGroup;
  patientModelObj:departmentModel = new departmentModel();

  constructor(private formBuilder : FormBuilder, private httpdepartment:AddDepartmentsService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      departmentName:[''],
      description:[''],
      status:[''],

    })

  }


  departmentDetails(){
    this.patientModelObj.departmentName =this.formValue.value.departmentName;
    this.patientModelObj.description =this.formValue.value.description;
    this.patientModelObj.status =this.formValue.value.status;
    
   

    this.httpdepartment.postDepartment(this.patientModelObj).subscribe(res=>{
      console.log(res);
      alert("department Added!")
      // this.postPatientDetails()
      this.formValue.reset();
    },
    err=>{
      alert("Something Went Wrong")
    })
  }


}
