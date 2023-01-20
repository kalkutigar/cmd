import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppointmentRepositoryService } from '../repository/appointment-repository.service';
import { map } from 'rxjs/operators';
//There will one service per component. But other components can also use the
//service allocated for another component via there distributers
//This layer interacts with the repository layer and has business logic
@Injectable({
  providedIn: 'root'
})
export class AddAppiontmentService {

  // Inject Repository in the constructor
  constructor(private appointmentRepositoryService:AppointmentRepositoryService, private http:HttpClient) { }

  postAppointment(data:any) {
    return this.http.post<any>('http://localhost:3000/posts', data).pipe(map((res:any)=> {
      return res;
    }))
  }

  getAppointment( ) {
    return this.http.get<any>('http://localhost:3000/posts').pipe(map((res:any)=> {
      return res;
    }))
  }

  updateAppointment(data:any, id:number) {
    return this.http.put<any>('http://localhost:3000/posts' +id,data).pipe(map((res:any)=> {
      return res;
    }))
  }

  deleteAppointment(id:any) {
    return this.http.delete<any>('http://localhost:3000/posts/' +id).pipe(map((res:any)=> {
      return res;
    }))
  }

  // call the repository to get,post and put the data
}
