import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  firstName = 'David';
  lastName = 'Doe';
  isDisabled = false;
  counter = 0;

  clickOnButton() {
    this.counter++;
  }
}
