import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsUserService } from '../services/ads-service/ads-user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imagesToShow: any[] = [];
  tableData:any;
  tableUserAds:any[]=[];
  tableDataRooms:any[]=[];
  constructor(private _AdsUserService:AdsUserService){

  }
getAllAds(data:any){
 this._AdsUserService.getAllAds(data).subscribe({
  next:(res)=>{
    console.log(res)
    this.tableData=res;
    this.tableUserAds = res.data.ads.slice(0, 4);
  },
  error:(err)=>{
    console.log(err)
  }
 })
}
getAllRooms(data:any){
this._AdsUserService.getAllRooms(data).subscribe({
  next:(res)=>{
    console.log(res)
    this.tableData=res;
    this.tableDataRooms=res.data.rooms.slice(0, 4);
  
  },
  error:(err)=>{
    console.log(err)


  }
})
}
ngOnInit(): void {
  this.getAllAds(this.tableUserAds)
  this.getAllRooms(this.tableDataRooms)
}
}


