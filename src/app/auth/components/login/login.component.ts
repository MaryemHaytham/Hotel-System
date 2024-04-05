import { Component } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/core/service/helper.service';
export const RegxPassword: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  
  hidePass = true;
  password_type: string = 'text';
  see: boolean = true;


  constructor(private _AuthService: AuthService, private _Router: Router,private _helper:HelperService) { }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword)])
  })


  handleForm(data: FormGroup): void {


    let userData = data.value;
    this._AuthService.onLogin(userData).subscribe({
      next: (response) => {
        localStorage.setItem('userToken', response.data.token);
        this._AuthService.getProfile();
      }, error: (error) => {
        console.log(error)
      }, complete: () => {
        this._Router.navigate(["admin"])
      }
    })
  }

  toggleSee() {
    this.see = !this.see;
    this.password_type = this.see ? 'text' : 'password';
  }

 
  getErrorMessageforPasswrod() {
    return this._helper.getErrorMessageforPasswrod(this.loginForm, 'password', { required: 'required', minlength: 'minlength', maxlength: 'maxlength', pattern: 'pattern' })
  }



}
