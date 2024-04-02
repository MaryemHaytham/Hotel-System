import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) {
    if (localStorage.getItem('userToken') !== null) {
      this.getProfile();
    }
  }


  getProfile() {
    let encoded: any = localStorage.getItem('userToken');
    let decode: any = jwtDecode(encoded);
    console.log(decode);
    localStorage.setItem('userRole', decode.role);
  }


  onLogin(data: object): Observable<any> {
    return this._HttpClient.post('/admin/users/login', data)
  }

  onResetPassword(data: object): Observable<any> {
    return this._HttpClient.post('/portal/users/reset-password', data)
  }
  onForgotPassword(data: any): Observable<any> {
    return this._HttpClient.post('/portal/users/forgot-password', data)
  }

  onRegister(data: any): Observable<any> {
    return this._HttpClient.post('/portal/users', data)

  }

}
