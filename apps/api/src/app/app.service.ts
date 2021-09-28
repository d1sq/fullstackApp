import { Injectable } from '@nestjs/common';
import { Person } from '@front-back/data';

@Injectable()
export class AppService {
  listOfData: Person[] = [
    {
      key: '1',
      name: 'Андрей <Andrew> Семахин',
      age: 1,
      address: 'Неизвестно',
    },
    {
      key: '2',
      name: 'Душнила Симахин',
      age: 80,
      address: 'Неизвестно',
    },
    {
      key: '3',
      name: 'Дмитрий Иванович <Dick> Дик',
      age: 40,
      address: 'Неизвестно',
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
