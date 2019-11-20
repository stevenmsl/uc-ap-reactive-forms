import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product, Item } from "../models/product.interface";
import { catchError } from "rxjs/operators";

@Injectable()
export class StockInventoryService {
  constructor(private http: HttpClient) {}
  getCarItems(): Observable<Item[]> {
    return this.http
      .get<Item[]>("/api/cart")
      .pipe(catchError(err => Observable.throw(err.json())));
  }
}
