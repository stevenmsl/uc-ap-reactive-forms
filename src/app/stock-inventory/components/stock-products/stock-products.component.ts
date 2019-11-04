import { Component, Input } from "@angular/core";
import { FormGroup, FormArray } from '@angular/forms';

@Component({
    selector: 'stock-products',
    styleUrls: ['stock-products.component.scss'],
    templateUrl: 'stock-products.component.html'
})
export class StockProductsComponent {
    @Input()
    parent : FormGroup;

    get stocks() {
        const controls = 
            (this.parent.get('stock') as FormArray).controls;
          
        //console.log(controls);
        return controls;
    }

}