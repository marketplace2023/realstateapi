import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedSocial } from './entities/redsocial.entity';
import { RedSocialService } from './redsocial.service';
import { RedSocialController } from './redsocial.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RedSocial])],
  providers: [RedSocialService],
  controllers: [RedSocialController],
})
export class RedSocialModule {}
