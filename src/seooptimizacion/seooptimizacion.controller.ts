import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SEOOptimizacion } from './entities/seooptimizacion.entity';
import { SEOOptimizacionService } from './seooptimizacion.service';
import { CreateSEOOptimizacionDto } from './dto/create-seooptimizacion.dto';
import { UpdateSEOOptimizacionDto } from './dto/update-seooptimizacion.dto';


@Controller('seo-optimizaciones')
export class SEOOptimizacionController {
  constructor(private readonly seoOptimizacionService: SEOOptimizacionService) {}

  // Obtener todas las optimizaciones SEO
  @Get()
  findAll(): Promise<SEOOptimizacion[]> {
    return this.seoOptimizacionService.findAll();
  }

  // Obtener una optimización SEO por ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<SEOOptimizacion> {
    return this.seoOptimizacionService.findOne(+id);
  }

  // Crear una nueva optimización SEO
  @Post()
  create(@Body() createSEOOptimizacionDto: CreateSEOOptimizacionDto): Promise<SEOOptimizacion> {
    return this.seoOptimizacionService.create(createSEOOptimizacionDto);
  }

  // Actualizar una optimización SEO
  @Put(':id')
  update(@Param('id') id: string, @Body() updateSEOOptimizacionDto: UpdateSEOOptimizacionDto): Promise<SEOOptimizacion> {
    return this.seoOptimizacionService.update(+id, updateSEOOptimizacionDto);
  }

  // Eliminar una optimización SEO
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.seoOptimizacionService.remove(+id);
  }
}
