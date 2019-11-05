import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
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


    //refactor using form builder 
    /*
    form = new FormGroup({
        store: new FormGroup({
            branch: new FormControl('B182'),
            code: new FormControl('1234')
        }),
        selector: this.createStock({}),
        stock: new FormArray([
            this.createStock({ product_id: 1, quantity: 10}),
            this.createStock({ product_id: 3, quantity: 50})
        ])    
    });
    */
    
    form = this.fb.group({
        store: this.fb.group({
            branch: '',
            code: ''
        }),
        selector: this.createStock({}),
        stock: this.fb.array([
            this.createStock({ product_id: 1, quantity: 10 }),
            this.createStock({ product_id: 3, quantity: 50})    
        ])
    });
    constructor(
        private fb: FormBuilder
    ) {}
    createStock(stock) {
        return new FormGroup({
            product_id: new FormControl(parseInt(stock.product_id,10) || ''),
            quantity: new FormControl(stock.quantity || 10)    
        })
    }

    addStock(stock) {
        const control = this.form.get('stock') as FormArray;
        control.push(this.createStock(stock));
    }
    
    removeStock({group, index}: {group:FormGroup, index: number}) { //De-structuring
        const control = this.form.get('stock') as FormArray;
        control.removeAt(index);
    }
    onSubmit() {
        console.log('Submit:', this.form.value);
    }
}