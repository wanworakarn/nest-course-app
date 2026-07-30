import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/Showjson')
  getJson(): object {
    return this.appService.getJson();
  }

  @Get('/Showjson2') // localhost:3000/showjson2
  getJson2() {
    return this.appService.getJson2();
  }
}