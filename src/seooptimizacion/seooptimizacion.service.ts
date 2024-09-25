import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SEOOptimizacion } from './entities/seooptimizacion.entity';
import { CreateSEOOptimizacionDto } from './dto/create-seooptimizacion.dto';
import { UpdateSEOOptimizacionDto } from './dto/update-seooptimizacion.dto';


@Injectable()
export class SEOOptimizacionService {
  constructor(
    @InjectRepository(SEOOptimizacion)
    private seoOptimizacionRepository: Repository<SEOOptimizacion>,
  ) {}

  // Obtener todas las optimizaciones SEO
  findAll(): Promise<SEOOptimizacion[]> {
    return this.seoOptimizacionRepository.find({ relations: ['empresa'] });
  }

  // Obtener una optimización SEO por ID
  findOne(id: number): Promise<SEOOptimizacion> {
    return this.seoOptimizacionRepository.findOne({
      where: { id_seo: id },
      relations: ['empresa'],
    });
  }

  // Crear una nueva optimización SEO
  create(createSEOOptimizacionDto: CreateSEOOptimizacionDto): Promise<SEOOptimizacion> {
    const nuevaSEO = this.seoOptimizacionRepository.create(createSEOOptimizacionDto);
    return this.seoOptimizacionRepository.save(nuevaSEO);
  }

  // Actualizar una optimización SEO
  async update(id: number, updateSEOOptimizacionDto: UpdateSEOOptimizacionDto): Promise<SEOOptimizacion> {
    await this.seoOptimizacionRepository.update(id, updateSEOOptimizacionDto);
    return this.seoOptimizacionRepository.findOne({
      where: { id_seo: id },
      relations: ['empresa'],
    });
  }

  // Eliminar una optimización SEO
  async remove(id: number): Promise<void> {
    await this.seoOptimizacionRepository.delete(id);
  }
}
