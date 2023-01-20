import { Component, OnInit } from '@angular/core';
import { DoctorPartService } from '../../services/doctor-part.service';
import {FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {
  editDoctor=new FormGroup({
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

  constructor(private doctSer:DoctorPartService,private router:ActivatedRoute) { }

  ngOnInit(): void {

  // console.log(result)
  this.doctSer.getcurrentDoc(this.router.snapshot.params.id).subscribe((result:any)=>{
    console.log(result)
    this.editDoctor=new FormGroup({
      firstname:new FormControl(result['firstname']),
      lastname:new FormControl(result['lastname']),
      speciality:new FormControl(result['speciality']),
      email:new FormControl(result['email']),
      password:new FormControl(result['password']),
      cpassword:new FormControl(result['password']),
      dob:new FormControl(result['dob']),
      gender:new FormControl(result['gender']),
      address:new FormControl(result['address']),
      city:new FormControl(result['city']),
      pcode:new FormControl(result['pcode']),
      phone:new FormControl(result['phone']),
      bio:new FormControl(result['bio']),
    })
  })
}

  updateUser(){
    this.doctSer.updateDocts(this.router.snapshot.params.id,this.editDoctor.value).subscribe((result)=>{
      console.log(result);
    })
  }
}
