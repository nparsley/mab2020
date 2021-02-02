import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Email } from './email';


@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email> {

  constructor() { }

  resolve() {
    return {
      id: 'asdasdsa',
      subject: 'asdasdsa',
      to: 'asdasdsa',
      from: 'asdasdsa',
      text: 'asdasdsa',
      html: 'asdasdsa'
    }
  }

}
