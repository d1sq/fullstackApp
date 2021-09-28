import { Injectable } from '@nestjs/common';
import { Person } from '@front-back/data';

@Injectable()
export class AppService {
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Joe White',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  getData(): Person[] {
    return this.listOfData;
  }

  addPerson(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        key: 'start' + Math.floor(Math.random() * 1000),
        name: 'name' + Math.floor(Math.random() * 1000),
        age: Math.floor(Math.random() * 1000),
        address: 'string' + Math.floor(Math.random() * 1000),
      },
    ];
  }
}
