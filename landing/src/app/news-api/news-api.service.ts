import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private url = 'https://newsapi.org/v2/top-headlines';
  private pageSize = 10;
  private apiKey = '7f701f013a33484a99d5dc4a883f98ef';
  private country = 'us';

  constructor() { }
}
