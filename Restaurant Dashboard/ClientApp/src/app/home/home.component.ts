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

  ngOnInit() {
      this.loadProducts();    // загрузка данных при старте компонента
  }
  // получаем данные через сервис
  loadProducts() {
      this._productService.getAll().subscribe((data: Product[]) => this.products = data);
  }
  // сохранение данных
  save() {
      if (this.product.id == null) {
          this._productService.create(this.product).subscribe((data: Product) => this.products.push(data));
      } else {
          this._productService.update(this.product).subscribe(data => this.loadProducts());
      }
      this.cancel();
  }
  editProduct(p: Product) {
      this.product = p;
  }
  cancel() {
      this.product = new Product();
      this.tableMode = true;
  }
  delete(p: Product) {
      this._productService.delete(p.id).subscribe(data => this.loadProducts());
  }
  add() {
      this.cancel();
      this.tableMode = false;
  }
}
