import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DeleteAdsComponent } from 'src/app/shared/delete/delete-ads.component';
import { FacilitiesService } from '../../services/facilities/facilities.service';
import { RoomsService } from '../../services/rooms/rooms.service';
import { BookinService } from '../../services/booking/bookin.service';
import { ViewComponent } from './components/view/view.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})

export class BookingComponent implements OnInit {


  constructor(private _BookinService: BookinService, private dialog: MatDialog, private _Router: Router) { }



  ngOnInit(): void {
    this.getBooking();
  }


  searchKey: string = '';
  length = 50;
  pageSize = 5;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 25];
  pageEvent: PageEvent | any;
  tableData: any[] = [];
  tableResponse: any;
  tagId: number = 0;
  facilitiesId: number = 0;

  openViewDialog() {
    const dialogRef = this.dialog.open(ViewComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if (result) {
      }
    });
  }

  getBooking() {
    let paramsApi = {
      pageSize: this.pageSize,
      pageNumber: this.pageIndex,
      name: this.searchKey,
      tagId: this.tagId > 0 ? this.tagId : 0,
      facilitiesId: this.facilitiesId
    }
    this._BookinService.gitAllBooking(paramsApi).subscribe({
      next: (res) => {
        console.log(res);
        this.tableResponse = res;
        this.tableData = res.data.booking;
      }
    })
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  openDeleteBookingDialog(dataRecipe: any): void {
    console.log(dataRecipe)
    const dialogRef = this.dialog.open(DeleteAdsComponent, {
      data: dataRecipe,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(dataRecipe.id, dataRecipe.name);
      if (result) {
        this.deleteBooking(result, dataRecipe.name)
      }
      console.log(dataRecipe.id, dataRecipe.name);
    });
  }

  deleteBooking(recipeId: number, name: string) {
    this._BookinService.deleteBooking(recipeId, name).subscribe({
      next: (res) => {
      }, error: (error) => {

        // this._ToastrService.error(`error in deleted Pross!`);
      }, complete: () => {
        this.getBooking();
        // this._ToastrService.success(`The Recipe was deleted successfully`);
      }
    })
  }



}
