import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitacionService } from './citacion.service';
import { CitacionController } from './citacion.controller';
import { Citacion } from './entities/citacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Citacion])],
  providers: [CitacionService],
  controllers: [CitacionController],
})
export class CitacionModule {}
