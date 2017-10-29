import { Route } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { RestauntDetailComponent } from './restaunt-detail/restaunt-detail.component'
import { MenuComponent } from './restaunt-detail/menu/menu.component'
import { ReviewsComponent } from './restaunt-detail/reviews/reviews.component'

export const ROUTES : Route[] = [
  { path : '', component: HomeComponent},
  { path : 'about', component: AboutComponent},
  { path : 'restaurants', component: RestaurantsComponent},
  { path : 'restaurant/:id', component: RestauntDetailComponent,
    children: [
      { path : '' , redirectTo: 'menu', pathMatch: 'full' },
      { path : 'menu', component: MenuComponent },
      { path : 'reviews', component: ReviewsComponent }
    ]
  }
]
