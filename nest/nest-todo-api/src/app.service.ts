import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  helloWorld() {
    return 'mmd';
  }
}
