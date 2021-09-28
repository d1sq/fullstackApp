/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from '@angular/core';
import { Person } from '@front-back/data';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'front-back-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  listOfData: Person[];
  constructor(private http: HttpClient) {this.fetch()}

  ngOnInit(): void {}

  fetch() {
    this.http
      .get<Person[]>('http://localhost:3333/api/persons')
      .subscribe((t) => (this.listOfData = t));
  }

  addPerson(): void {
    this.http
      .post('http://localhost:3333/api/addPerson', {})
      .subscribe(() => this.fetch());
  }
}
