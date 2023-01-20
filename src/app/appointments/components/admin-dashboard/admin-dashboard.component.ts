import { Component, OnInit } from '@angular/core';
import { AddAppiontmentService } from '../../services/add-appiontment.service';
import { HttpClient } from '@angular/common/http';
import { AddPetsService } from 'src/app/patients/services/add-pets.service';
import { DoctorPartService } from 'src/app/doctors/services/doctor-part.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
constructor(private appointment:AddAppiontmentService,private patient:AddPetsService, private http:HttpClient , private doctSer:DoctorPartService) { }

  ngOnInit(): void {
    this.getAllAppointments();
    this.getAllpatients('')
    this.getAllDoctors('')
}

  allApp:any;
  allPets:any;
  allDocs:any;
  getAllAppointments(){
    this.appointment.getAppointment().subscribe(res=>{
      this.allApp=res;
    })
  }

  getAllpatients(id:any){
    this.patient.getcurrentpatient(id).subscribe(res=>{
      this.allPets=res;
    })
  }

  getcurrentDoc(id:any){
    return this.http.get('  http://localhost:3000/doctor')
  }

  getAllDoctors(id:any){
    this.doctSer.getcurrentDoc(id).subscribe(res=>{
      this.allDocs = res;
    })
  }

  count_status(response:boolean){
    let a=0, c=0;
    for(let i=0; i<this.allApp?.length; i++){
      if(this.allApp[i].status==true){a=a+1}
      else{c=c+1}
    }
    if(response){return a} else{return c}
  }
}
