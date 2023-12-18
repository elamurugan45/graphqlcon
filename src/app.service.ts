import { Injectable } from '@nestjs/common';
import { Query } from '@nestjs/graphql';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
  