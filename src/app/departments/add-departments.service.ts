import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AddDepartmentsService {

  constructor(private http:HttpClient) { }


  postDepartment(data:any) {
    return this.http.post<any>('http://localhost:3000/departments', data).pipe(map((res:any)=>{
      return res
    }))
  }

  getDepartment( ) {
    return this.http.get<any>('http://localhost:3000/departments').pipe(map((res:any)=>{
      return res
    }))
  }

  updatePatient(data:any, id:number) {
    return this.http.put<any>('http://localhost:3000/departments' +id,data).pipe(map((res:any)=>{
      return res
    }))
  }

  deletePatient(id:any) {
    return this.http.delete<any>('http://localhost:3000/departments/'+id).pipe(map((res:any)=>{
      return res
    }))
  }

}


