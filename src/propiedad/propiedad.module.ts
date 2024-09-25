import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropiedadService } from './propiedad.service';
import { PropiedadController } from './propiedad.controller';
import { Propiedad } from './entities/propiedad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Propiedad])],
  providers: [PropiedadService],
  controllers: [PropiedadController],
})
export class PropiedadModule {}
