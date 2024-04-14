import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomDetailsService } from '../services/room-details service/room-details.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink, SharedModule,MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,],
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit{
  
  constructor(private _roomDetailsService: RoomDetailsService,private _ActivatedRoute:ActivatedRoute){
    this.roomId = _ActivatedRoute.snapshot.params['_id'];
    console.log(this.roomId);
    
  }
  roomId: number =0;
  RoomDetails(id: number) {
  this._roomDetailsService.getRoomById(id).subscribe({
    next:(res)=>{
      console.log(res);
    },
    error:(err)=>{
      console.log(err);
    }


  });
}

ngOnInit(){
  if(this.roomId){
    this.RoomDetails(this.roomId);
  }

}


}
