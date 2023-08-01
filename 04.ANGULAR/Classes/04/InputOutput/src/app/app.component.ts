import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InputOutput';

  people = ['John', 'Mary', 'Peter'];
  name = '';

  addPerson(value : any) { 
    this.people.push(value);
    this.name = value;
  }
}
