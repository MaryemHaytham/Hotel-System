import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgxDropzoneModule } from 'ngx-dropzone'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    RouterLink, 
    RouterLinkActive ,
    NgxDropzoneModule
  ],
  exports:[
    
    FormsModule, 
    ReactiveFormsModule, 
    RouterLink, 
    RouterLinkActive ,
    NgxDropzoneModule

  ]
})
export class SharedModule { }
