import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDataService } from 'src/interface/idata-service';
import { IProduct } from 'src/interface/iproduct';

@Injectable()
export class DataService implements IDataService {

  private _url;

  constructor(private http: HttpClient){}

  getAll() {
    return this.http.get(this._url);
  }

  getById(id: number) {
    return this.http.get(this._url + '/' + id);
  }

  create(product: IProduct) {
    return this.http.post(this._url, product);
  }

  update(product: IProduct) {
    return this.http.put(this._url, product);
  }

  delete(id: number) {
    return this.http.delete(this._url + '/' + id);
  }

  saveImg(file:File){
    return this.http.post("/api/img",file);
  }


  public setUrl(url){
    this._url = url
  }
}
