import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgxDropzoneModule } from 'ngx-dropzone'
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    RouterLink, 
    RouterLinkActive ,
    NgxDropzoneModule,
    MatDialogModule,
    ToastrModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule
    

  ],
  exports:[
    FormsModule, 
    ReactiveFormsModule, 
    RouterLink, 
    RouterLinkActive ,
    NgxDropzoneModule,
    MatDialogModule,
    ToastrModule,
    MatInputModule,
    NavbarComponent,
    SidebarComponent,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule
    


  ],
 
})
export class SharedModule { }
