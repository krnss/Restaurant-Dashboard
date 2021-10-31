import { IProduct } from "src/interface/iproduct";

export class Product implements  IProduct{
  constructor(
      public id?: number,
      public name?: string,
      public company?: string,
      public price?: number) { }
}
