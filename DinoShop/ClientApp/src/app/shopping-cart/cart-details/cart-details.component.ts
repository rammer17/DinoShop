import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IDino } from 'src/app/_models/dino.model';
import { ShoppingCartService } from 'src/app/_services/shopping-cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {
  cartItems?: IDino[];
  isCartEmpty: boolean = true;
  bill: number = 0;
  finalBill: number = 0;
  selectedDino?: IDino;
  audio: any;
  constructor(private scService: ShoppingCartService,
              private messageService: MessageService,
              private router: Router) { }

  ngOnInit(): void {
    this.fetchCartItems();
  }
  playAudio(){
    let audio = new Audio();
    audio.src = this.selectedDino?.soundPath!;
    audio.load();
    audio.play();
  }
  fetchCartItems() {
    this.cartItems = this.scService.getCartItems();
    if(this.cartItems.length) {
      this.isCartEmpty = false;
    } else {
      this.isCartEmpty = true;
    }
    this.cartItems.forEach(dino => {
      this.bill += dino.price;
      this.finalBill = this.bill + 20;
    });
    
  }
  checkout() {
    this.scService.orderDetails.next({
      cartItems: this.cartItems,
      price: this.finalBill
    })
    this.isCartEmpty = true;
    this.cartItems?.splice(0);
    this.router.navigateByUrl('/cart/details');
  }
  removeItem(index: number) {
    this.cartItems?.splice(index, 1)
    if(this.cartItems?.length) {
      this.isCartEmpty = false;
    } else {
      this.isCartEmpty = true;
    }
    this.cartItems?.forEach(dino => {
      this.bill += dino.price;
      this.finalBill = this.bill + 20;
    });
  }



  ngOnDestroy() {
    this.isCartEmpty = true;
  }
}
