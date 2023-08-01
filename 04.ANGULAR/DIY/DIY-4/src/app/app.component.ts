import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DIY-4';
  currentNumber: number = 0;

  decrease(){ 
    this.currentNumber--;
  }
}
