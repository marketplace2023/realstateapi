import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CitacionService } from './citacion.service';
import { CreateCitacionDto } from './dto/create-citacion.dto';
import { UpdateCitacionDto } from './dto/update-citacion.dto';
import { Citacion } from './entities/citacion.entity';

@Controller('citaciones')
export class CitacionController {
  constructor(private readonly citacionService: CitacionService) {}

  // Obtener todas las citaciones
  @Get()
  findAll(): Promise<Citacion[]> {
    return this.citacionService.findAll();
  }

  // Obtener una citación por ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Citacion> {
    return this.citacionService.findOne(+id);
  }

  // Crear una nueva citación
  @Post()
  create(@Body() createCitacionDto: CreateCitacionDto): Promise<Citacion> {
    return this.citacionService.create(createCitacionDto);
  }

  // Actualizar una citación
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCitacionDto: UpdateCitacionDto): Promise<Citacion> {
    return this.citacionService.update(+id, updateCitacionDto);
  }

  // Eliminar una citación
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.citacionService.remove(+id);
  }
}
