import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { RoomsService } from '../../services/rooms/rooms.service';
import { DeleteAdsComponent } from 'src/app/shared/delete/delete-ads.component';
import { FacilitiesService } from '../../services/facilities/facilities.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {


  constructor(private _RoomsService: RoomsService, private dialog: MatDialog, private _FacilitiesService: FacilitiesService, private _Router: Router) { }



  ngOnInit(): void {
    this.getRooms();
  }

  openAddAdsDialog() {
    throw new Error('Method not implemented.');
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


  getRooms() {
    let paramsApi = {
      pageSize: this.pageSize,
      pageNumber: this.pageIndex,
      name: this.searchKey,
      tagId: this.tagId > 0 ? this.tagId : 0,
      facilitiesId: this.facilitiesId
    }
    this._RoomsService.gitAllRooms(paramsApi).subscribe({
      next: (res) => {
        console.log(res);
        this.tableResponse = res;
        this.tableData = res.data;
      }
    })
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  gitAllFacilities() {
    let paramsApi = {
      pageSize: this.pageSize,
      pageNumber: this.pageIndex,
    }
    this._FacilitiesService.gitAllFacilities(paramsApi).subscribe({
      next: (response) => {
        console.log(response)
      }
    })
  }

  addRoom() {
    this._Router.navigate(['/admin/rooms/add']);
  }

  openDeleteRoomDialog(dataRoom: any): void {
    console.log(dataRoom)
    const dialogRef = this.dialog.open(DeleteAdsComponent, {
      data: dataRoom,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(dataRoom.id, dataRoom.name);
      if (result) {
        this.deleteBooking(result, dataRoom.name)
      }
      console.log(dataRoom.id, dataRoom.name);
    });
  }

  deleteBooking(roomId: number, name: string) {
    this._RoomsService.deleteRoom(roomId, name).subscribe({
      next: (res) => {
      }, error: (error) => {

        // this._ToastrService.error(`error in deleted Pross!`);
      }, complete: () => {
        this.getRooms();
        // this._ToastrService.success(`The Recipe was deleted successfully`);
      }
    })
  }




}
