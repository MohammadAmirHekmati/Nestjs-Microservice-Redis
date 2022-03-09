import { Injectable } from '@nestjs/common';
import {Numbers} from "./app.controller";

@Injectable()
export class AppService {
  async calculate(numbers:Numbers):Promise<number>
  {
      const sum=(numbers.ageOne+numbers.ageTwo)
    return sum
  }
}
