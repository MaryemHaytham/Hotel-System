import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgxDropzoneModule } from 'ngx-dropzone'

import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { MatInputModule } from '@angular/material/input';




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
    MatInputModule
    
  ],
  exports:[
    FormsModule, 
    ReactiveFormsModule, 
    RouterLink, 
    RouterLinkActive ,
    NgxDropzoneModule,
    MatDialogModule,
    ToastrModule,
    MatInputModule
    

  ],
 
})
export class SharedModule { }
