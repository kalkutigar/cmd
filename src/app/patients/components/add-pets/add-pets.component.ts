import { Component, OnInit } from '@angular/core';
import {AddPetsService } from "../../services/add-pets.service";
import { FormGroup,FormControl } from "@angular/forms";

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css'] 
})
export class AddPetsComponent implements OnInit {
  // patient:any;
  message:any;
  addpatient=new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    username:new FormControl(''),
    email:new FormControl(''),
    confirmpassword:new FormControl(''),
    password:new FormControl(''),
    dateofbirth:new FormControl(''),
    gender:new FormControl(''),
    address:new FormControl(''),
    city:new FormControl(''),
    postalcode:new FormControl(''),
    phone:new FormControl(''),
    file:new FormControl(''),
    bio:new FormControl(''),
    status:new FormControl('')
  })
  constructor(private patient:AddPetsService) {
  }
  ngOnInit(): void {
  }
  savePatient(){
    // console.warn(this.addpatient.value)
    this.patient.savePatients(this.addpatient.value).subscribe((result)=>{
  //  console.log(result);
  this.message=true;
   
    })
  }
  removemessage() {
    this.message=false;
  }
}
