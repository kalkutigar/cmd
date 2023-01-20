import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AddPetsService } from "../../services/add-pets.service";
import { FormGroup,FormControl} from "@angular/forms";

@Component({
  selector: 'app-edit-pt',
  templateUrl: './edit-pt.component.html',
  styleUrls: ['./edit-pt.component.css']
})
export class EditPtComponent implements OnInit {
  editpatient=new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    username:new FormControl(''),
    email:new FormControl(''),
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
  });
  constructor(private patient:AddPetsService,private router:ActivatedRoute) {
  }
  ngOnInit(): void {

    this.patient.getcurrentpatient(this.router.snapshot.params.id).subscribe((result:any)=>{
      console.log(result)
      this.editpatient=new FormGroup({
        firstname:new FormControl(result['firstname']),
        lastname:new FormControl(result['lastname']),
        username:new FormControl(result['username']),
        email:new FormControl(result['email']),
        password:new FormControl(result['password']),
        dateofbirth:new FormControl(result['dateofbirth']),
        gender:new FormControl(result['gender']),
        address:new FormControl(result['address']),
        city:new FormControl(result['city']),
        postalcode:new FormControl(result['postalcode']),
        phone:new FormControl(result['phone']),
        file:new FormControl(result['file']),
        bio:new FormControl(result['bio']),
        status:new FormControl(result['status'])
      });
    });
    
  }
  UpdatePatient(){
    this.patient.updatePatient(this.router.snapshot.params.id,this.editpatient.value).subscribe((result)=>{
      console.log(result);
      
    })
  }
}
