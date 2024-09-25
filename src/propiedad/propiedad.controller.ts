import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PropiedadService } from './propiedad.service';
import { CreatePropiedadDto } from './dto/create-propiedad.dto';
import { UpdatePropiedadDto } from './dto/update-propiedad.dto';
import { Propiedad } from './entities/propiedad.entity';

@Controller('propiedades')
export class PropiedadController {
  constructor(private readonly propiedadService: PropiedadService) {}

  // Obtener todas las propiedades
  @Get()
  findAll(): Promise<Propiedad[]> {
    return this.propiedadService.findAll();
  }

  // Obtener una propiedad por ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Propiedad> {
    return this.propiedadService.findOne(+id);
  }

  // Crear una nueva propiedad
  @Post()
  create(@Body() createPropiedadDto: CreatePropiedadDto): Promise<Propiedad> {
    return this.propiedadService.create(createPropiedadDto);
  }

  // Actualizar una propiedad
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePropiedadDto: UpdatePropiedadDto): Promise<Propiedad> {
    return this.propiedadService.update(+id, updatePropiedadDto);
  }

  // Eliminar una propiedad
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.propiedadService.remove(+id);
  }
}
