import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input()positions: object;
  images = ['assets/images/united.jpg','assets/images/city.jpg','assets/images/pool.jpg','assets/images/chelsea.jpg','assets/images/ars.jpg','assets/images/spurs.jpg']
  
  constructor() { }

  ngOnInit() {
  }

}
