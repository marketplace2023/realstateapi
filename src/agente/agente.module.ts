import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgenteService } from './agente.service';
import { AgenteController } from './agente.controller';
import { Agente } from './entities/agente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Agente])],
  providers: [AgenteService],
  controllers: [AgenteController],
})
export class AgenteModule {}
