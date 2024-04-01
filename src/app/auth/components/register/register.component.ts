import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HelperService } from 'src/app/core/service/helper.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegxPassword } from '../login/login.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  message: string = '';
  files: File[] = [];
  hidePass = true;
  hideConfirmPass = true;
  profileImgValue: any


  constructor(private _helper: HelperService, private _AuthService: AuthService, private _Router: Router){}

  ngOnInit(): void {
      
  }
  registerForm = new FormGroup({
    userName: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    country: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword), Validators.maxLength(20), Validators.minLength(6)]),
    confirmPassword: new FormControl(null, [Validators.required]),

  });


  onRegister(data: FormGroup) {
    
    let registerFormData = new FormData()
    registerFormData.append('profileImage', this.profileImgValue)
    registerFormData.append('userName', data.value.userName)
    registerFormData.append('email', data.value.email)
    registerFormData.append('phoneNumber', data.value.phoneNumber)
    registerFormData.append('password', data.value.password)
    registerFormData.append('confirmPassword', data.value.confirmPassword)
    registerFormData.append('country', data.value.country)
    console.log(data.value);

    console.log(registerFormData);
    this._AuthService.onRegister(registerFormData).subscribe({
      next: (response) => {

      }, error: (error) => {
      
      }, complete: () => {
        this._Router.navigate(['auth/login'])
      },
    })
  }

  onSelect(event: any) {
    console.log(event.addedFiles[0]);
    this.profileImgValue = event.addedFiles[0]
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
    this.profileImgValue = false
  }
 

}
