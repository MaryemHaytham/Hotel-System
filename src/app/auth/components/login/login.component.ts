import { Component } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export const RegxPassword: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  password_type: string = 'text';
  see: boolean = true;
  isLoading: boolean = false;


  constructor(private _AuthService: AuthService) { }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required,  Validators.maxLength(20), Validators.minLength(8)])
  })
  

  handleForm(data: FormGroup): void {
    debugger
    this.isLoading = true;
    let userData = data.value;
    this._AuthService.onLogin(userData).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log(response)
      }, error: (error) => {
        this.isLoading = false;
        console.log(error)
        console.log("ccccccccccccccccccc");
      }, complete: () => {
        this.isLoading = false;
        console.log("AAAAAAAAAAAAAA");

      }
    })
  }

  toggleSee() {
    this.see = !this.see;
    this.password_type = this.see ? 'text' : 'password';
  }




}
