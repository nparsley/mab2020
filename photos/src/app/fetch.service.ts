import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



interface FetchResponse {
    urls: {
      regular: any;
    }
}

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) {

  }


  getFetch(image: string) {
    return this.http.get<FetchResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID skkVkyJKi7rObcOcR6ZiqyReYTWs-7RAzudInr0fbtA'
      }
    });
  };

}
