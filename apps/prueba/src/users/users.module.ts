import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PermisosModule } from './permisos/permisos.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [PermisosModule]
})
export class UsersModule {}
