import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AdsService } from '../../services/ads-service/ads.service';

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

  constructor(private _AdsService:AdsService){}
  
  ngOnInit(): void {
      this.getAds();
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
