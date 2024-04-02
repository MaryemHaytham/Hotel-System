import { Component, OnInit } from '@angular/core';
import { FacilitiesService } from '../../services/facilities-service/facilities.service';
import { PageEvent } from '@angular/material/paginator';
import { AddFacilitieComponent } from './add-facilitie/add-facilitie/add-facilitie.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAdsComponent } from 'src/app/shared/delete/delete-ads.component';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit{
  length = 50;
  pageSize = 5;
  pageIndex =1;
  pageSizeOptions = [5,10,15];
  pageEvent :PageEvent|any;
  
  constructor(private _FacilitiesService:FacilitiesService,private dialog:MatDialog){}
  ngOnInit(): void {
    this.getFacilities()
  }
  getFacilities(){
    let params={

    }
    this._FacilitiesService.getAllFacilities(params).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  openAddFacilitieDialog(){
    const dialogRef = this.dialog.open(AddFacilitieComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    
      
    });
  }
  
  openDeleteAdsDialog(){
    const dialogRef = this.dialog.open(DeleteAdsComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if(result){
        this.getFacilities()
      }

      
    });
    
  }
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

}
