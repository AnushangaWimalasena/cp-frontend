import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, interval, of } from 'rxjs'
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { switchMap, catchError } from 'rxjs/operators'
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(50)
      ]),
      transition('* => void', [
        animate(1000, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  index: number = 0;
  numImages: number = 4;
  imagesLoaded: number = 0;
  loading: boolean = true;
  imagesUrl = [
    '../assets/danielle-macinnes-MPpIqkoi7hQ-unsplash.jpg',
    '../assets/jessica-rockowitz-5NLCaz2wJXE-unsplash.jpg',
    '../assets/nathan-anderson-GM5Yn5XRVqA-unsplash.jpg',
    '../assets/simon-rae-jJYlr6H1ClM-unsplash.jpg' ]

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.imagesUrl.forEach((x, index) => {
      const image = new Image();
      image.onload = (() => {
        this.imagesLoaded++;
        this.loading = (this.imagesLoaded != this.numImages)
      })
      image.src = x
    })
    interval(5000).subscribe(() => {
      if (!this.loading)
        this.index = (this.index + 1) % this.numImages
    })
  }

  loadForm():void{
    console.log('press')
    this.route.navigate(['/home/details-vid-upload'])
  }

}
