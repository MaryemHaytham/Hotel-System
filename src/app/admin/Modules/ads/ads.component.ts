import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AdsService } from '../../services/ads-service/ads.service';
import { MatDialog } from '@angular/material/dialog';
import { AddAdsComponent } from './Components/add-edit-ads/add-ads.component';
import { DeleteAdsComponent } from '../../../shared/delete/delete-ads.component';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit{
  length = 50;
  pageSize = 5;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 25];
  pageEvent: PageEvent |any;
  tableData :any[]= [];
  tableResponse : any

  constructor(private _AdsService:AdsService,private dialog:MatDialog,){}
  
  ngOnInit(): void {
      this.getAds();
  }

  openAddAdsDialog(){
    const dialogRef = this.dialog.open(AddAdsComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if(result){
        
      }

      
    });
    
  }
  openEditAdsDialog(){
    const dialogRef = this.dialog.open(AddAdsComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if(result){
        
      }

      
    });
  }


  openDeleteAdsDialog(){
    const dialogRef = this.dialog.open(DeleteAdsComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if(result){
        
      }

      
    });
    
  }

  getAds(){
    let paramsApi = {
      pageSize:this.pageSize,
      pageNumber:this.pageIndex,
    }
    this._AdsService.getAllAds(paramsApi).subscribe({
      next:(res)=>{
        console.log(res.pageSize);
        this.tableResponse = res;
        this.tableData=res.data;
      }
    })
  }
  

  
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

}
