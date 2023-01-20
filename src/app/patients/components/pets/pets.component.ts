import { Component, OnInit } from '@angular/core';
import {AddPetsService } from "../../services/add-pets.service"

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  patients:any=[];
  constructor(private patientData:AddPetsService) { }
  ngOnInit(): void {
    this.patientData.patients().subscribe((data)=>{
      // console.warn("data",data);
      this.patients=data; 
    })
  }
deletepatient(patient:any)
   {
    this.patients.splice(patient-1,1);
    this.patientData.deletePatient(patient).subscribe((data=>{
    }))
  }
  list:boolean=false;
  card:boolean=true;

  lists(){
    this.list =!this.list;
    this.card =!this.card;
  }
  cards(){
    this.card =!this.card;
    this.list =!this.list;
  }
}
