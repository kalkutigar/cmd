import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DoctorPartService {

  url="  http://localhost:3000/doctor/"

  constructor(private http:HttpClient) { }
  
  saveUsers(value:any){
   return this.http.post(this.url,value);
  }

  users(){
    return this.http.get(this.url);
  }

  updateDocts(id:any, data:any){
    return this.http.put(`${this.url}/${id}`, data)
  }

  getcurrentDoc(id:any){
    return this.http.get(`${this.url}/${id}`)
  }

  deleteDoct(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
}
