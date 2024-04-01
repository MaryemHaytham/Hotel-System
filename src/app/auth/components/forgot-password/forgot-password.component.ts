import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
constructor(private _AuthService:AuthService, private _Router:Router){}
ngOnInit(): void {
  
}
forgotPasswordForm = new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email])
})
onSubmit(data:FormGroup){
  console.log(data)
  this._AuthService.onForgotPassword(data.value).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      this._Router.navigateByUrl('/auth/reset-password')
    }
  })
}
}
