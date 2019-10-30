import { Component, Input } from "@angular/core";
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'stock-products',
    styleUrls: ['stock-products.component.scss'],
    templateUrl: 'stock-products.component.html'
})
export class StockProductsComponent {
    @Input()
    parent : FormGroup;

}