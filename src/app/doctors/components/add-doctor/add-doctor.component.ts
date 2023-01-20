import { Component, OnInit } from '@angular/core';
import { DoctorPartService } from '../../services/doctor-part.service';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})

export class AddDoctorComponent implements OnInit {
  message:any;
  addDoctor=new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    speciality:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    cpassword:new FormControl(''),
    dob:new FormControl(''),
    gender:new FormControl(''),
    address:new FormControl(''),
    city:new FormControl(''),
    pcode:new FormControl(''),
    phone:new FormControl(''),
    bio:new FormControl(''),
  })

  constructor(private doctSer:DoctorPartService) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.doctSer.saveUsers(this.addDoctor.value).subscribe((result)=>{
      console.log(result);
      this.message=true;
    })
  }

  removeMessage(){
    this.message=false;
  }

  doctAdd(value:any){
    this.doctSer.saveUsers(value).subscribe((result)=>{
      console.warn(result)
    })
  }

}
