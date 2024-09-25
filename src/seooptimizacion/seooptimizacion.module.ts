import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SEOOptimizacion } from './entities/seooptimizacion.entity';
import { SEOOptimizacionService } from './seooptimizacion.service';
import { SEOOptimizacionController } from './seooptimizacion.controller';


@Module({
  imports: [TypeOrmModule.forFeature([SEOOptimizacion])],
  providers: [SEOOptimizacionService],
  controllers: [SEOOptimizacionController],
})
export class SEOOptimizacionModule {}
