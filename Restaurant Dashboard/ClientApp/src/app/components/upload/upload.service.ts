import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  saveImg(file:File){
    const formData = new FormData();
    formData.append('ImageFile', file);

    return this.http.post('/api/upload', formData);
  }
}
