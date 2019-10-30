import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //shut down the ‘ng serve’ and restart it if you encountered undefined error in App Module 
    StockInventoryModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
