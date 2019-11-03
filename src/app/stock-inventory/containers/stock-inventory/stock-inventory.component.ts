import { Component } from "@angular/core";
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
    selector: 'stock-inventory',
    styleUrls: ['stock-inventory.component.scss'],
    templateUrl: 'stock-inventory.component.html' 
})
export class StockInventoryComponent {
    products: Product[] = [
        { "id": 1, "price": 2800, "name": "MacBook Pro" },
        { "id": 2, "price": 50, "name": "USB-C Adaptor" },
        { "id": 3, "price": 400, "name": "iPod" },
        { "id": 4, "price": 900, "name": "iPhone" },
        { "id": 5, "price": 600, "name": "Apple Watch" },
    ]; //Forgot to type the semicolon and the list failed to shows in the stock-selector component 

    form = new FormGroup({
        store: new FormGroup({
            branch: new FormControl('B182'),
            code: new FormControl('1234')
        }),
        selector: new FormGroup({
            product_id: new FormControl(''),
            quantity: new FormControl(10)
        }),
        stock: new FormArray([])    
    });
    
    onSubmit() {
        console.log('Submit:', this.form.value);
    }
}