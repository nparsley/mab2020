import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;


  letterChange() {
    this.includeLetters = !this.includeLetters;
  }

  numberChange() {
    this.includeNumbers = !this.includeNumbers;
  }

  symbolChange() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    // console.log(this.includeLetters);
    // console.log(this.includeNumbers);
    // console.log(this.includeSymbols);
    console.log(`
    About to generate a password with the following:
    Includes letters: ${this.includeLetters}
    Includes numbers: ${this.includeNumbers}
    Includes symbols: ${this.includeSymbols}
    `)
    this.password = 'MY PASSWORD';
  }


}
