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

  constructor(private scService: ShoppingCartService) { }

  ngOnInit(): void {
    this.fetchOrderDetails();
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
