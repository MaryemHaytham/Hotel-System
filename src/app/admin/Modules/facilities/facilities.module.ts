import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesComponent } from './facilities.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddFacilitieComponent } from './add-facilitie/add-facilitie/add-facilitie.component';



@NgModule({
  declarations: [
    FacilitiesComponent,
    AddFacilitieComponent,
  
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    SharedModule
  ]
})
export class FacilitiesModule { }
