import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { EditPtComponent } from './components/edit-pt/edit-pt.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule
  ]
})
export class PatientModule { }
