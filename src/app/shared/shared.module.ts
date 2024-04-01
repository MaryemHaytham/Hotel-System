import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgxDropzoneModule } from 'ngx-dropzone'
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    NgxDropzoneModule,
    MatInputModule
  ],
  exports: [

    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    NgxDropzoneModule,
    MatInputModule

  ]
})
export class SharedModule { }
