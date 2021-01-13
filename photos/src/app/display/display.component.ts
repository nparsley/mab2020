import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  image: string;

  constructor(private fetch: FetchService) {

  }

  ngOnInit(): void {
  }


  onDisplay(image: string) {
    this.fetch.getFetch(image).subscribe((image) => {
      this.image = image.urls.regular;
    })
  }

}
