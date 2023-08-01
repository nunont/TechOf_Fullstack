import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DIY-2';

  fullName = '';
  city = '';
  country = '';

  phrase = '';

  showInfo() {
    this.phrase = `Hello my name is ${this.fullName}, I live in ${this.city}, ${this.country}!`;
  }
}
