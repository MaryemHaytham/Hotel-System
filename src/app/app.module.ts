import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GlobalInterceptor } from './core/interceptor/global.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    CarouselModule,
    ToastrModule.forRoot(),

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: GlobalInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
