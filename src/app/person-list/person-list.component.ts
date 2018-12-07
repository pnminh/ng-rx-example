import { Person } from './../person-add/person-add.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  constructor() {}
  @Input() persons: Person[];
  ngOnInit() {}
}
