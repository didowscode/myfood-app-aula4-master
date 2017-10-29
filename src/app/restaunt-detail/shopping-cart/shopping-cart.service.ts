import { MenuItem } from './../../restaurant-detail/menu-item/menu-item.model'
import {CartItem } from './shopping-cart.model'

export class ShoppingCartService{

  cartItems : CartItem[] = []

  addItem(menuItem : MenuItem){
    let cartItem = this.cartItems
            .find((cItem) => cItem.menuItem.id === menuItem.id)

    if(cartItem){
      cartItem.quantity++
    }else{
      this.cartItems.push(new CartItem(menuItem))
    }
  }

  removeItem(cartItem : CartItem){
    this.cartItems.splice(this.cartItems.indexOf(cartItem), 1)
  }

  total() : number {
    return this.cartItems.map(cItem => cItem.value())
                      .reduce((prev, val) => prev + val, 0)
  }

  clear() {
    this.cartItems = []
  }

}
