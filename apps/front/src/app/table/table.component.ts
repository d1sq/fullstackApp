/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Person } from '@front-back/data';

@Component({
  selector: 'front-back-tablea',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  constructor(private http: HttpClient) {this.fetch()}
  listOfData: Person[]

  fetch() {
    this.http
      .get<Person[]>('http://localhost:3333/api/persons')
      .subscribe((t) => (this.listOfData = t));
  }

  addPerson(): void{
    this.http.post(('http://localhost:3333/api/addPerson'), {}).subscribe(() => this.fetch())
  }
}
