import { Person } from './person-add/person-add.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persons: Person[] = [];

  addPerson(person: Person) {
    this.persons.push(person);
  }
}
