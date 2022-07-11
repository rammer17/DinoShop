import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from 'src/app/_services/shopping-cart.service';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.scss']
})
export class OrderPreviewComponent implements OnInit {
  subs?: Subscription;
  orderDetails: any;
  orderDetailsDummy = {
    cartItems: [],
    firstName: 'Андриян',
    lastName: 'Беров',
    email: 'test@abv.bg',
    phoneNumber: '080993232',
    address: 'Адрес'
  }

  constructor(private scService: ShoppingCartService) { }

  ngOnInit(): void {
    this.fetchOrderDetails();
  }
  fetchOrderDetails() {
    this.subs = this.scService.orderDetails.subscribe(
      resp => {
        this.orderDetails = resp;
        console.log(resp)
      }
    )
  }

  ngOnDestroy() {
    this.subs?.unsubscribe();
  }

}
