import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddPetsService {
   url='http://localhost:3000/patient/';
  constructor(public http:HttpClient) { }
  patients()
  {
    return this.http.get(this.url);
  }
  savePatients(data:any)
  {
  return this.http.post(this.url,data);
  }
  deletePatient(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getcurrentpatient(id:any){
    return this.http.get(`${this.url}/${id}`)
  }
  updatePatient(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
}
