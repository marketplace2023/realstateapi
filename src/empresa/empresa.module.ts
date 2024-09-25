import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { Empresa } from './entities/empresa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Empresa])],
  providers: [EmpresaService],
  controllers: [EmpresaController],
})
export class EmpresaModule {}
