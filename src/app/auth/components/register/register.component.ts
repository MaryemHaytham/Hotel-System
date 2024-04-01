import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  message: string = '';
  files: File[] = [];
  hidePass = true;
  hideConfirmPass = true;
  profileImgValue: any


  constructor() { }

  ngOnInit(): void {

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
