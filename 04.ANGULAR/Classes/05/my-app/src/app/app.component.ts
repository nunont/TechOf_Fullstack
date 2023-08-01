import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  people = ['John', 'Paul', 'George', 'Ringo']
  name: string | undefined;
  selectedName: string | undefined;

  addPerson(newPerson : string){
    this.name = newPerson;
    this.people.push(newPerson);
  }

  crossOffPerson(person : string){
    console.warn('Parent says: received crossOffPerson event with', person);
    this.people.indexOf(person);
    this.people.splice(this.people.indexOf(person), 1);
  }

  selectPerson(person : string){
    this.selectedName = person;
    alert(person);
  }

}
