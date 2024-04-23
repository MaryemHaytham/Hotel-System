import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsUserService } from '../services/ads-service/ads-user.service';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from 'src/app/shared/shared.module';


@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  data: any;
  message: any;
  tableFav: any = [];

  constructor(private _AdsUserService: AdsUserService, private _ToastrService: ToastrService) { }
  ngOnInit(): void {
    this.getAllFavRooms()
  }



  getAllFavRooms() {
    this._AdsUserService.getRoomFav().subscribe({
      next: (res) => {
        console.log(res.data.favoriteRooms)
        this.tableFav = res.data.favoriteRooms
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


  removeFromFav(roomId: string) {
    this._AdsUserService.removeFromFav(roomId).subscribe({
      next: (res) => {
        console.log(res)
        this.getAllFavRooms();

      }, error: (error) => {
        this.message = error.error.message;
        this._ToastrService.error(`error in remove From Fav!`);
      }, complete: () => {
        this.getAllFavRooms();
        this._ToastrService.success(`The Recipe was removed From Fav successfully`);
      }
    })
  }





}
