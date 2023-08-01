import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DIY-1';

  firstName = '';
  lastName = '';
  email = '';

  save() {
    alert('First Name: ' + this.firstName + '\nLast Name: ' + this.lastName + '\nEmail: ' + this.email)
  }
}
