import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsUserService } from '../services/ads-service/ads-user.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  data:any;
  constructor(private _AdsUserService: AdsUserService){}
  ngOnInit(): void {
    this.getAllFavRooms(this.data)
  }
getAllFavRooms(data:number){
  this._AdsUserService.getRoomFav(this.data).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
}
