import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{ path: '', component: AdminComponent },
{ path: 'users', loadChildren: () => import('./Modules/users/users.module').then(m => m.UsersModule) },
{ path: 'rooms', loadChildren: () => import('./Modules/rooms/rooms.module').then(m => m.RoomsModule) },
{ path: 'ads', loadChildren: () => import('./Modules/ads/ads.module').then(m => m.AdsModule) },
{ path: 'booking', loadChildren: () => import('./Modules/booking/booking.module').then(m => m.BookingModule) },
{ path: 'facilities', loadChildren: () => import('./Modules/facilities/facilities.module').then(m => m.FacilitiesModule) },
{ path: 'home', loadChildren: () => import('./Modules/home/home.module').then(m => m.HomeModule) },
{ path: 'comments', loadChildren: () => import('./Modules/comments/comments.module').then(m => m.CommentsModule) },
{ path: 'favorites', loadChildren: () => import('./Modules/favorites/favorites.module').then(m => m.FavoritesModule) }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
