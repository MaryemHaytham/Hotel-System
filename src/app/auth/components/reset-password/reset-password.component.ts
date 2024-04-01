import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  hide:boolean=true;
  hiden:boolean=true;
  constructor(private _AuthService:AuthService,private _Router:Router){}
  ngOnInit(): void {
    
  }
resetPasswordForm=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  seed:new FormControl(null,[Validators.required]),
  password:new FormControl(null,[Validators.required]),
  confirmPassword:new FormControl(null,[Validators.required])

})
onSubmit(data:FormGroup){
  this._AuthService.onResetPassword(data.value).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      
    }
  })
}
}
