import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public progress: number;
  public message: string;
  public imgUrl:string="google";
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  public uploadFile = (files) => {
    if (files.length != 1) {
      this.message = "eror";
      return;
    }
    const formData = new FormData();
    formData.append('ImageFile', files[0]);
    this.http.post('/api/upload', formData)
      .subscribe(body => {
        this.message = "submit";
        console.log(body)
        this.imgUrl = (body as any).imgUrl
      });
  }
}
