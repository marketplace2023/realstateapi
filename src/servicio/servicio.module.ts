import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicioService } from './servicio.service';
import { ServicioController } from './servicio.controller';
import { Servicio } from './entities/servicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Servicio])],
  providers: [ServicioService],
  controllers: [ServicioController],
})
export class ServicioModule {}
