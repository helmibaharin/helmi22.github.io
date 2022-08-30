import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  // connect to app.js

  apiUrl = environment.api +'/top_website';


  //get all data

  getAllData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }

  //create data

 createData(data:any):Observable<any>
 {
  console.log(data,'createapi=>')
  return this._http.post(`${this.apiUrl}`,data);
 }

 //get date

 getDate():Observable<any[]>
 {
  return this._http.get<any>(this.apiUrl+'/date');
 }

  //get data by date

  getDatabyDate(date:any):Observable<any>
  {
    let dates = date;
   return this._http.get<any>(`${this.apiUrl}/${dates}`);
  }

    //Delete Data

    DeleteData(id:any):Observable<any>
    {
      let ids = id;
     return this._http.delete(`${this.apiUrl}/${ids}`);
    }

      //gUpdate Data

  UpdateData(data:any,id:any):Observable<any>
  {
    let ids = id;
   return this._http.put(`${this.apiUrl}/update/${ids}`,data);
  }

  //Get single Data

  getSingleData(id:any):Observable<any>
  {
    let ids = id;
   return this._http.get(`${this.apiUrl}/single/${ids}`);
  }

   //Get all time Data

   getAllTimeData():Observable<any>
   {
    return this._http.get(`${this.apiUrl}/alltime`);
   }
}
