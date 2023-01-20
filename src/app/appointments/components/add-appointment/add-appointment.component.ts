import { Component, OnInit } from '@angular/core';
import { AddAppointmentDistributorService} from '../../core/add-appointment-distributor.service';
import { FormGroup, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppointmentModel } from './add-appointement.model';
import { AddAppiontmentService } from '../../services/add-appiontment.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  formValue !: FormGroup;
  appointmentModelObj : AppointmentModel = new AppointmentModel();
  // allAppointment:any;
  // constructor(private formBuilder : FormBuilder) { }
    // Variable declaration and initialization

  // Dependency Injection inside constructor
  constructor(private formBuilder : FormBuilder, private appointment:AddAppiontmentService) { }


  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id:[''],
      patientName: [''],
      department: [''],
      vet: [''],
      date: [''],
      time:[''],
      patientEmail:[''],
      patientPhonenumber:[''],
      Message:[''],
      status:[''],

    })
    // this.getAllAppointments()
  }

  postAppointmentDetails(){
    this.appointmentModelObj.id =this.formValue.value.id;
    this.appointmentModelObj.patientName =this.formValue.value.patientName;
    this.appointmentModelObj.department =this.formValue.value.department;
    this.appointmentModelObj.vet =this.formValue.value.vet;
    this.appointmentModelObj.date =this.formValue.value.date;
    this.appointmentModelObj.time =this.formValue.value.time;
    this.appointmentModelObj.patientEmail =this.formValue.value.patientEmail;
    this.appointmentModelObj.patientPhonenumber =this.formValue.value.patientPhonenumber;
    this.appointmentModelObj.Message =this.formValue.value.Message;
    this.appointmentModelObj.status =this.formValue.value.status;

    this.appointment.postAppointment(this.appointmentModelObj).subscribe(res=>{
      console.log(res);
      alert("Appointement Added Successfully")
      this.formValue.reset();
    },
    err=>{
      alert("Something Went wrong")
    })
  }

  // Logic for the submit
  // onSubmit() {

  // }
}
