import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-classes';

  errorClasses = ['important', 'super'];

  isError = false;

  toggleError() {
    if (this.isError){
      return this.errorClasses;
    }
    else {
      return ['warning', 'super'];
    }
  }
}
