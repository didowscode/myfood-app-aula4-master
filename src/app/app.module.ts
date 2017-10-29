import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'

import { ROUTES } from './app.route';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurant/restaurant.component'

import { RestaurantsService } from './restaurants/restaurants.service';
import { RestauntDetailComponent } from './restaunt-detail/restaunt-detail.component';
import { MenuComponent } from './restaunt-detail/menu/menu.component';
import { ReviewsComponent } from './restaunt-detail/reviews/reviews.component';
import { ShoppingCartComponent } from './restaunt-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component'

import { ShoppingCartService } from './restaunt-detail/shopping-cart/shopping-cart.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestauntDetailComponent,
    MenuComponent,
    ReviewsComponent,
    ShoppingCartComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
