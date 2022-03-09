import {Body, Controller, Get, Post, ValidationPipe} from '@nestjs/common';
import {AppService, Numbers} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("calculate")
  async calculate(@Body(ValidationPipe) numbers:Numbers):Promise<any>
  {
    console.log(numbers)
    return await this.appService.calculate(numbers)
  }
}
