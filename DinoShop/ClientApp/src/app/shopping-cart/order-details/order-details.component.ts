import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from 'src/app/_services/shopping-cart.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  subs?: Subscription;
  orderDetails: any;

  constructor(private scService: ShoppingCartService,
              private router: Router) { }

  ngOnInit(): void {
    this.fetchOrderDetails();
  }
  orderForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(0),
    address: new FormControl('')
  })

  onSubmit() {
    this.scService.orderDetails.next({
      cartItems: this.orderDetails.cartItems,
      price: this.orderDetails.price,
      firstName: this.orderForm.get('firstName')?.value!,
      lastName: this.orderForm.get('lastName')?.value!,
      email: this.orderForm.get('email')?.value!,
      phoneNumber: this.orderForm.get('phoneNumber')?.value!,
      address: this.orderForm.get('address')?.value!,
    })
    this.router.navigate(['/cart/preview']);
  }
  fetchOrderDetails() {
    this.subs = this.scService.orderDetails.subscribe(
      resp => {
        this.orderDetails = resp;
      }
    )
  }
  ngOnDestroy() {
    this.subs?.unsubscribe();
  }

}
