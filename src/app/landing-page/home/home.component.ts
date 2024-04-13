import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsUserService } from '../services/ads-service/ads-user.service';


import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import {
  MatDateRangeSelectionStrategy,
  DateRange,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegxPassword } from 'src/app/auth/components/login/login.component';
import { IAds } from 'src/app/core/model/ads';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, CommonModule, SharedModule],
})


export class HomeComponent implements OnInit {
  capacity: number = 0; // Initial value

  incrementValue() {
    this.capacity++;
  }

  decrementValue() {
    if (this.capacity > 0) {
      this.capacity--;
    }
  }

  imagesToShow: any[] = [];
  tableData: any;
  tableUserAds: IAds[] = [];
  tableDataRooms: any[] = [];
  constructor(private _AdsUserService: AdsUserService) { }

  BookingForm: FormGroup = new FormGroup({
    startDate: new FormControl(null),
    endDate: new FormControl(null),
  })

  handleForm(data: FormGroup): void {


  }






  getAllAds(data: any) {
    this._AdsUserService.getAllAds(data).subscribe({
      next: (res) => {
        console.log(res)
        this.tableData = res;
        this.tableUserAds = res.data.ads.slice(0, 4);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  getAllRooms(data: any) {
    this._AdsUserService.getAllRooms(data).subscribe({
      next: (res) => {
        console.log(res)
        this.tableData = res;
        this.tableDataRooms = res.data.rooms.slice(0, 4);

      },
      error: (err) => {
        console.log(err)


      }
    })
  }
  ngOnInit(): void {
    this.getAllAds(this.tableUserAds)
    this.getAllRooms(this.tableDataRooms)
  }
}


