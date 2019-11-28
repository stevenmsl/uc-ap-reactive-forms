import { Component } from "@angular/core";
import { StockInventoryService } from "./stock-inventory/services/stock-inventory.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "uc-ap-reactive-forms";

  constructor(private stockInventoryService: StockInventoryService) {
    this.stockInventoryService
      .getCartItems()
      .subscribe(cartItems => console.log(cartItems));

    this.stockInventoryService
      .getProducts()
      .subscribe(products => console.log(products));
  }
}
