import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AdsService } from 'src/app/admin/services/ads-service/ads.service';
import { RoomsService } from 'src/app/admin/services/rooms/rooms.service';
import { HelperService } from 'src/app/core/service/helper.service';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss']
})
export class AddAdsComponent implements OnInit {

  adsData:any
  roomName:any[]=[];
  roomNameId:number=0;
  activeId:number=0;
  active:any[]=[]
  adsId :number=0
  constructor(private _AdsService:AdsService, private _router:Router,private _RoomsService:RoomsService,private _helperService:HelperService,private _ActivatedRoute:ActivatedRoute){
    this.adsId= _ActivatedRoute.snapshot.params['_id']
    console.log(this.adsId);
  }

  ngOnInit(): void {
    this.getAllRooms();
    if (this.adsId) {
      this.getAdsById(this.adsId);
    }
      
  }
  addAdsForm = new FormGroup({
    
    discount: new FormControl('',),
    room: new FormControl(''),
    isActive: new FormControl(''),
  })
  onSubmit(): void {
    if (this.addAdsForm.valid) { 
      const formData = this.addAdsForm.value;
      if (this.adsId) {
        this._AdsService.onEditAds(this.adsId, formData).subscribe({
          next: (res) => {
            console.log(res);
           
          },
          error: (err) => {
            console.error(err);
            
          },
          complete: () => {
            this._router.navigate(['/admin/ads']);
          }
        });
      } else {
        this._AdsService.onAddAds(formData).subscribe({
          next: (res: any) => {
            console.log(res);  
          },
          error: (err: any) => {
            console.error(err);
          },
          complete: () => {
            this._router.navigate(['/admin/ads']);
          }
        });
      }
    }
  }
  
    

  getAllRooms(){
    this._helperService.getAllRooms().subscribe({
      next: (res) => {
        this.roomName= res.data.rooms;
      }
    })
  }

  getAdsById(id: number) {
    this._AdsService.getAdsById(id).subscribe({
      next: (res: any) => {
        this.adsData = res.data.ads;
      }, error: () => {

      }, complete: () => {

        this.addAdsForm.patchValue({
          discount: this.adsData.room.discount,
          room:this.adsData.room.roomNumber,
          isActive:this.adsData.isActive,

        
        })
      }
    })
  }

  
}
