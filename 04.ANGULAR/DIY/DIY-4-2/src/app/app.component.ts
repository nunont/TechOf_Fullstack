import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DIY-4-2';
  currentValue = 0;

  decrease() { 
    this.currentValue--;
  }
  
  increase(value : number) {
    this.currentValue = value;
  }
}
