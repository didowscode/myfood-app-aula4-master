import { Component, OnInit } from '@angular/core';

import { RestaurantsService } from './../restaurants/restaurants.service'
import { Restaurant } from './../restaurant/restaurant.model'

import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'mf-restaunt-detail',
  templateUrl: './restaunt-detail.component.html'
})
export class RestauntDetailComponent implements OnInit {

  restaurant : Restaurant

  constructor(private restaurantsService : RestaurantsService,
              private router : ActivatedRoute) { }

  ngOnInit() {
    let id = this.router.snapshot.params['id']
    this.restaurantsService.restaurantById(id)
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
