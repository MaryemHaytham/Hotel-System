import { Component, OnInit } from '@angular/core';
import { FacilitiesService } from '../../services/facilities-service/facilities.service';
import { PageEvent } from '@angular/material/paginator';
import { AddFacilitieComponent } from './add-facilitie/add-facilitie/add-facilitie.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAdsComponent } from 'src/app/shared/delete/delete-ads.component';
import { ViewFacilitieComponent } from './view-facilitie/view-facilitie/view-facilitie.component';

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
  tableFacilities:any[]=[];
  tableData:any;
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
      this.tableFacilities=res;
      this.tableData=res.data.facilities;
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
      if(result){
        this.getFacilities()
      }

      
    });
  }
  addFacilities(data:any){
    this._FacilitiesService.addNewFacilitie(data).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  openEditCategory(facilitieData:any):void{
    console.log(facilitieData)
    const dialogRef = this.dialog.open(AddFacilitieComponent, {
      data:facilitieData.name
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     console.log(result)
     if(result){
     this.newEditFailities(result,facilitieData.id)
     }
  });
}
newEditFailities(name:string, id:string){
  this._FacilitiesService.onEditFacilitie(name,id).subscribe({
    next:(res)=>{
     
    },error:(err:any)=>{
      console.log(err)
    },complete:()=>{
    this.getFacilities()
    }
  })
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
  openViewFacilitieDialog(){
    const dialogRef = this.dialog.open(ViewFacilitieComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    
      
    });
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

}
