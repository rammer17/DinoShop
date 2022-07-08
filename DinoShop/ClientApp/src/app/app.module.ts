import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DinoPreviewComponent } from './dino/dino-preview/dino-preview.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {ButtonModule} from 'primeng/button';
import {ImageModule} from 'primeng/image';
import {ToastModule} from 'primeng/toast';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderDetailsComponent } from './shopping-cart/order-details/order-details.component';
import { OrderPreviewComponent } from './shopping-cart/order-preview/order-preview.component';
import { CartDetailsComponent } from './shopping-cart/cart-details/cart-details.component';
import { DinoCreateComponent } from './dino/dino-create/dino-create.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DinoPreviewComponent,
    HomeComponent,
    ShoppingCartComponent,
    OrderDetailsComponent,
    OrderPreviewComponent,
    CartDetailsComponent,
    DinoCreateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    ToastModule,
    RouterModule,
    ImageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, MessageService]
})
export class AppModule { }
