import {Body, Controller, Get} from '@nestjs/common';
import { AppService } from './app.service';
import {MessagePattern} from "@nestjs/microservices";

export class Numbers {
  ageOne:number
  ageTwo:number
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern("calculate")
  async calculate(@Body() numbers:Numbers):Promise<any>
  {
    console.log(numbers)
    return await this.appService.calculate(numbers)
  }
}
