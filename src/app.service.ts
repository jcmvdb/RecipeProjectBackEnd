import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Bitch!';
  }

  getBitches(): string {
    return 'Je kanker bolle kanker moeder!';
  }
}