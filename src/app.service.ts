import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  mostrarMensagem(): string {
    return 'Hello World!';
  }
}
