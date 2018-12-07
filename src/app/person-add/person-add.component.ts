import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {
  @Output() person: EventEmitter<Person> = new EventEmitter<Person>();
  addedPerson: Person = new Person();
  constructor() {}

  ngOnInit() {}
  addPerson() {
    this.person.emit(this.addedPerson);
    this.addedPerson = new Person();
  }
}
export class Person {
  firstName: string;
  lastName: string;
  age: number;
}
