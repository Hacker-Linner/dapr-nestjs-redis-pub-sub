import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/redis-publisher')
  async postRedisPub(@Body() reqBody) {
    console.log(`Redis 发布了 ${JSON.stringify(reqBody)} `);

    return `NestJS 订阅者收到的 ${reqBody} 发布`;
  }
}
