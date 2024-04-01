import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgxDropzoneModule } from 'ngx-dropzone'
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    RouterLink, 
    RouterLinkActive ,
    NgxDropzoneModule,
    MatDialogModule,
    ToastrModule,
    MatIconModule
  ],
  exports:[
    
    FormsModule, 
    ReactiveFormsModule, 
    RouterLink, 
    RouterLinkActive ,
    NgxDropzoneModule,
    MatDialogModule,
    ToastrModule,
    MatIconModule

  ]
})
export class SharedModule { }
