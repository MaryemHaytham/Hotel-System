import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  injectStripe,
  StripeElementsDirective,
  StripeCardComponent,
} from 'ngx-stripe';
import {
  StripeElementsOptions,
  StripeCardElementOptions,
} from '@stripe/stripe-js';
import { BookinService } from 'src/app/admin/services/booking/bookin.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  ActivatedRoute: any;
  bookingId: any;
  bookingDetails: any;



  constructor(private _BookinService: BookinService, private _ActivatedRoute: ActivatedRoute) {

    this.bookingId = _ActivatedRoute.snapshot.params['_id'];
  }

  token: any;
  stripeTest: any;
  // stripe: any;
  card: any;
  @ViewChild(StripeCardComponent) cardElement!: StripeCardComponent;
  stripe = injectStripe('pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8'
  );
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };
  createToken() {
    const name = 'shimaa';
    this.stripe
      .createToken(this.cardElement.element, { name })
      .subscribe((result: any) => {
        if (result.token) {
          // Use the token
          console.log(result.token.id);
          this.token = result.token.id;
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }


  ngOnInit() {
    this.getBookingDetails()
  }
  getBookingDetails() {
    this._BookinService.bookingDetails(this.bookingId).subscribe({
      next: (res) => {
        this.bookingDetails = res.data.booking
        console.log(this.bookingDetails)
        this.bookingId = res.data.booking._id
      }
    })
  }


  paySubmit(token: string) {
    this._BookinService.payment(this.bookingId, token).subscribe({
      next: (res) => {
      }
    })
  }




}
