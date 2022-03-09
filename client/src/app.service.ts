import {BadRequestException, Injectable} from '@nestjs/common';
import {ClientProxy, ClientProxyFactory, Transport,MicroserviceOptions} from "@nestjs/microservices";
import {IsEnum, IsNumber, Min, ValidateIf} from "class-validator";


export class Numbers {


  ageOne:number
  // @ValidateIf(x=>x.ageTwo==x.ageOne)
  ageTwo:number

  async check()
  {
    if (this.ageOne!==this.ageTwo)
      throw new BadRequestException()
  }
  call=this.check()
}

@Injectable()
export class AppService {
  private client:ClientProxy

  constructor()
  {
    this.client=ClientProxyFactory.create({
      transport:Transport.REDIS,
      options:{
        host:"redis-17452.c11.us-east-1-3.ec2.cloud.redislabs.com",
        port:17452,
        password:"RU5P3jlElj3QixJzNRdY9ulXd8QjIXRy"
      }
    })
  }

  async calculate(numbers:Numbers):Promise<any>
  {
    console.log(numbers)
    return this.client.send<number,Numbers>("calculate",numbers)
  }
}
