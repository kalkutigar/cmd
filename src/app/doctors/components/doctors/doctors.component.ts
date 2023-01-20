import { Component, OnInit } from '@angular/core';
import { DoctorPartService } from '../../services/doctor-part.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
data:any;
  constructor(private doctSer:DoctorPartService) { }   

  ngOnInit(): void {
    this.doctorAdd();
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

  users:any="";

  doctorAdd(){
    this.doctSer.users().subscribe((data)=>
    this.users=data)
  }

  deleteDoct(user:any){
    this.doctSer.deleteDoct(user).subscribe((res)=>{
    console.warn(user);
    this.doctorAdd();
  })
  }

  transferId(id:any){
    this.data=id;
  }

}
