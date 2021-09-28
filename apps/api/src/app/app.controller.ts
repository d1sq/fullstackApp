import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('persons')
  getData() {
    return this.appService.getData();
  }

  @Post('addPerson')
  addPerson(){
    return this.appService.addPerson()
  }
}
