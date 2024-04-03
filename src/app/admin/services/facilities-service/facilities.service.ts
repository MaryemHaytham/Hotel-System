import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  constructor(private _HttpCliene:HttpClient) { }
  getAllFacilities(data:any):Observable<any>{
    return this._HttpCliene.get('/admin/room-facilities',data)
  }
  
}
