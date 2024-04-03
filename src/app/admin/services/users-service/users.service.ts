import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient: HttpClient) { }
  getAllUsers(data: any): Observable<any> {
    return this._HttpClient.get('/admin/users', data)
  }
}
