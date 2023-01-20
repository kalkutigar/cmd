import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import { AdminDashboardComponent } from './appointments/components/admin-dashboard/admin-dashboard.component';
import { AllAppointmentsComponent } from './appointments/components/all-appointments/all-appointments.component';
import { AddAppointmentComponent } from './appointments/components/add-appointment/add-appointment.component';
import { DoctorsComponent } from './doctors/components/doctors/doctors.component';
import { AddDoctorComponent } from './doctors/components/add-doctor/add-doctor.component';
import { ScheduleComponent } from './appointments/components/schedule/schedule.component';
import { AddScheduleComponent } from './appointments/components/add-schedule/add-schedule.component';
import { DepartmentsComponent } from './departments/components/departments/departments.component';
import { AddDepartmentsComponent } from './departments/components/add-departments/add-departments.component';
import { HeaderComponent } from './shared/header/header.component';
// import { FormsModule } from '@angular/forms';
import { AddPetsComponent } from './patients/components/add-pets/add-pets.component';
import { PetsComponent } from './patients/components/pets/pets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {EditPtComponent  } from "./patients/components/edit-pt/edit-pt.component";
import { EditDoctorComponent } from './doctors/components/edit-doctor/edit-doctor.component';
// import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [

    AppComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    AllAppointmentsComponent,
    AdminDashboardComponent,
    AddAppointmentComponent,
    DoctorsComponent,
    AddDoctorComponent,
    // AddPetsComponent,
    ScheduleComponent,
    AddScheduleComponent,
    DepartmentsComponent,
    AddDepartmentsComponent,
    HeaderComponent,
    // AddPetsComponent,
    // PetsComponent,
    // EditComponent
    AddPetsComponent,
    PetsComponent,
    EditPtComponent,
    EditDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
