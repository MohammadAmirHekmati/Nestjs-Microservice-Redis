import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MicroservicesModule} from "@nestjs/microservices/microservices-module";
import {MicroserviceOptions, Transport} from "@nestjs/microservices";

async function bootstrap() {

  const microserviceOptions:MicroserviceOptions=
      {
        transport:Transport.REDIS,
        options:{
            host:"redis-17452.c11.us-east-1-3.ec2.cloud.redislabs.com",
            port:17452,
            password:"RU5P3jlElj3QixJzNRdY9ulXd8QjIXRy"
        }
      }

  const app = await NestFactory.createMicroservice(AppModule,microserviceOptions);
  await app.listen()
  console.log("Microservice Running")
}
bootstrap();
