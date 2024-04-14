import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomDetailsService {

constructor(private _HttpClient:HttpClient) { }
getRoomById(id:number) :Observable<any>{
  return this._HttpClient.get(`/portal/rooms/${id}`)
}
onClickReview(data:any,id:number):Observable<any>{
  return this._HttpClient.post(`/portal/room-reviews/${id}`,data)
}
onClickComments(data:any,id:number):Observable<any>{
  return this._HttpClient.post(`/portal/room-comments/${id}`,data)
}

}
