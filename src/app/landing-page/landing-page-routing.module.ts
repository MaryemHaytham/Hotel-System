import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('../landing-page/home/home.component').then(m => m.HomeComponent), title: 'home' },
      { path: 'explore', loadComponent: () => import('../landing-page/explore/explore.component').then(m => m.ExploreComponent), title: 'explore' },
      { path: 'reviews', loadComponent: () => import('../landing-page/reviews/reviews.component').then(m => m.ReviewsComponent), title: 'reviews' },
      { path: 'favorites', loadComponent: () => import('../landing-page/favorites/favorites.component').then(m => m.FavoritesComponent), title: 'favorites' },

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
