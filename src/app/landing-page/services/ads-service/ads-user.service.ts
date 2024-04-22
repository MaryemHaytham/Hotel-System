import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdsUserService {

  constructor(private _HttpClient:HttpClient) { }
  getAllAds(data:any):Observable<any>{
    return this._HttpClient.get('/portal/ads',data)
  }
  getAllRooms(data:any):Observable<any>{
    return this._HttpClient.get('/portal/rooms/available',data)
  }
  getRoomById(id:number) :Observable<any>{
    return this._HttpClient.get(`/portal/rooms/${id}`)
  }
  saveFavRoom(id:number):Observable<any>{
  return this._HttpClient.post(`/portal/favorite-rooms`,{fav:id})
  }
  getRoomFav():Observable<any>{
  return this._HttpClient.get('/portal/favorite-rooms')
  }
}
