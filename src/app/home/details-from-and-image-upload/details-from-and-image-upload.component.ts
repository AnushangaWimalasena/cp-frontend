import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-from-and-image-upload',
  templateUrl: './details-from-and-image-upload.component.html',
  styleUrls: ['./details-from-and-image-upload.component.css']
})
export class DetailsFromAndImageUploadComponent implements OnInit {

  form_data: FormGroup;
  vid_file : File | undefined;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  
  fileName = ''

  name = ''
  sex = ''
  age = ''
  relationship = ''
  save_path = ''
  response : any

  constructor(fb: FormBuilder, private http: HttpClient, private route: Router) {
    this.form_data = fb.group({
      name: ['', Validators.required],
      sex: ['', Validators.required],
      relationship: ['', Validators.required],
      age: ['', Validators.required],
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  ngOnInit(): void {
  }

  onFileSelected(event:any) {

    this.vid_file =  event.target.files[0];
    // const file:File = event.target.files[0];

    // if (file) {

    //     this.fileName = file.name;

    //     const formData = new FormData();

    //     formData.append("video", file);

    //     const upload$ = this.http.post("http://127.0.0.1:5000/video-upload", formData);

    //     upload$.subscribe();
    // }
}

upload_files(){

  if (this.vid_file) {

    this.fileName = this.vid_file.name;

    const formData = new FormData();

    formData.append("video", this.vid_file);

    this.name = this.form_data.get('name').value
    this.sex = this.form_data.get('sex').value
    this.age = this.form_data.get('age').value
    this.relationship = this.form_data.get('relationship').value

    formData.append('name', this.name)
    formData.append('sex', this.sex)
    formData.append('age', this.age)
    formData.append('relationship', this.relationship)

    let headers = new HttpHeaders({'Access-Control-Allow-Origin': '*' });
    let options = { headers: headers };


    const upload$ = this.http.post("http://127.0.0.1:5000/video-upload", formData, options);

    upload$.subscribe((res : any)=>{
      this.response = res
      this.route.navigate(['/home/results-show', this.response ])
    });

    // this.route.navigate(['/home/results-show'])

    // const upload$ = this.http.post("http://127.0.0.1:5000/", formData, options);
    // upload$.subscribe((res : any)=>{
    //   console.log(res)
    // });
  }
}

}
