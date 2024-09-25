import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BacklinkService } from './backlink.service';
import { BacklinkController } from './backlink.controller';
import { Backlink } from './entities/backlink.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Backlink])],
  providers: [BacklinkService],
  controllers: [BacklinkController],
})
export class BacklinkModule {}
