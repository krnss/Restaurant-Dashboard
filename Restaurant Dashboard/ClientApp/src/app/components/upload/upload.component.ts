import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadService } from '../../../service/upload.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public progress: number;
  public message: string;

  file: File;
  imageSrc: string | ArrayBuffer;

  @Output() public onUploadFinished = new EventEmitter();

  constructor( private uploadService:UploadService) { }
  ngOnInit() {
  }

  readURL(event: Event): void {
    if ((<HTMLInputElement>event.target).files && (<HTMLInputElement>event.target).files[0]) {
        this.file = (<HTMLInputElement>event.target).files[0];

        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;

        reader.readAsDataURL(this.file);
    }
  }

  public saveFile(){
    if(this.file == null)
      return Observable;

    return this.uploadService.saveImg(this.file);
  }

  public remuveFile(){
    this.file = null;
    this.imageSrc = undefined;
  }
}
