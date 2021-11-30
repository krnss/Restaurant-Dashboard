import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends DataService {

  _url="/api/categories";
}
