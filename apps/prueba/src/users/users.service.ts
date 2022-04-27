import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  public findAll(): string {
    return 'Retornar todos los usuarios';
  }
}
