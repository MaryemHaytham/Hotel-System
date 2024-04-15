import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomDetailsService } from '../services/room-details service/room-details.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, SharedModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,],
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})

export class RoomDetailsComponent implements OnInit {

  roomImages: any[] = [];
  createdBy: string = '';
  roomNumber: string = '';

  constructor(private _roomDetailsService: RoomDetailsService, private _ActivatedRoute: ActivatedRoute) {
    this.roomId = _ActivatedRoute.snapshot.params['_id'];
    console.log(this.roomId);
  }

  ngOnInit() {
    if (this.roomId) {
      this.RoomDetails(this.roomId);
    }
  }


  roomId: number = 0;
  RoomDetails(id: number) {
    this._roomDetailsService.getRoomById(id).subscribe({
      next: (res) => {
        console.log(res.data.room);
        this.roomImages = res.data.room.images;
        this.createdBy = res.data.room.createdBy.userName;
        console.log(this.createdBy)
        this.roomNumber = res.data.room.roomNumber;
        console.log(this.roomNumber)

      },
      error: (err) => {
        console.log(err);
      }


    });
  }
  reviewsForm: FormGroup = new FormGroup({
    roomId: new FormControl(),
    rating: new FormControl(),
    review: new FormControl()
  })
  onReviewSubmit(myData: FormGroup) {
    console.log(myData)
    this._roomDetailsService.onClickReview(myData.value, this.roomId).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  commentForm: FormGroup = new FormGroup({
    roomId: new FormControl(),
    comment: new FormControl()

  })
  onSubmit(data: FormGroup) {
    console.log(data.value.comment)
    this._roomDetailsService.onClickComments(data.value, this.roomId).subscribe({
      next: (res) => {
        this.roomId = res.roomId
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


}
