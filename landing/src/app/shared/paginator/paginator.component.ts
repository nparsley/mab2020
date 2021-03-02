import { Component, OnInit, Input, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { NewsApiService } from 'src/app/news-api/news-api.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() numberOfPages: number;
  @Output() getPage = new EventEmitter;
  pageOptions: number[];

  currentPage = 1;

  constructor(private newsApiService: NewsApiService) {
    this.newsApiService.numberOfPages.subscribe((noOfPages) => {
      this.numberOfPages = noOfPages;


    this.pageOptions = [
      this.currentPage -2,
      this.currentPage -1,
      this.currentPage,
      this.currentPage + 1,
      this.currentPage + 2
    ].filter(pageNumber => pageNumber >= 1 && pageNumber <= this.numberOfPages)
  })
}

  ngOnInit(): void {
  }

  setPage(page: any) {
    this.currentPage = page;
    this.getPage.emit(page);
  }

}
