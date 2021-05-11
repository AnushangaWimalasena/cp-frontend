import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-details-from-and-image-upload',
  templateUrl: './details-from-and-image-upload.component.html',
  styleUrls: ['./details-from-and-image-upload.component.css']
})
export class DetailsFromAndImageUploadComponent implements OnInit {

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  fileName = ''

  constructor(fb: FormBuilder, private http: HttpClient) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  ngOnInit(): void {
  }

  onFileSelected(event:any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("video", file);

        const upload$ = this.http.post("http://127.0.0.1:5000/video-upload", formData);

        upload$.subscribe();
    }
}

}
