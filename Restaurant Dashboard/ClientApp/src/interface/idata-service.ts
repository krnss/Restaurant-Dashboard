import { IProduct } from "./iproduct";

export interface IDataService {

  getAll() ;

  getById(id: number);

  create(product: IProduct) ;

  update(product: IProduct) ;

  delete(id: number) ;
}
