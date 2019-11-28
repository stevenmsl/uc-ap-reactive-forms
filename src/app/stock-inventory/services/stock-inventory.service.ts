import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product, Item } from "../models/product.interface";
import { catchError } from "rxjs/operators";
import {
  HandleError,
  HttpErrorHandler
} from "src/app/http-error-handler.service";

@Injectable()
export class StockInventoryService {
  private handleError: HandleError;
  constructor(private http: HttpClient, httpErrorHanlder: HttpErrorHandler) {
    this.handleError = httpErrorHanlder.createHandleError(
      "StockInventoryService"
    );
  }
  getCartItems(): Observable<Item[]> {
    return this.http
      .get<Item[]>("/api/cart")
      .pipe(catchError(this.handleError<Item[]>("getCartItems", [])));
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>("/api/products")
      .pipe(catchError(this.handleError<Product[]>("getProducts", [])));
  }
}
