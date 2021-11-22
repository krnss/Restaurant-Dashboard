import { Component } from '@angular/core';
import { IDataService } from 'src/interface/idata-service';
import { Product } from 'src/models/product';
import { DataService } from 'src/service/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: []
})
export class HomeComponent {
  product: Product = new Product();   // изменяемый товар
  products: Product[];                // массив товаров
  tableMode: boolean = true;          // табличный режим

  constructor(private _productService: DataService) {
    this._productService.setUrl("/api/products");
  }

}
