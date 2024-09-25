import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ServicioService } from './servicio.service';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { Servicio } from './entities/servicio.entity';

@Controller('servicios')
export class ServicioController {
  constructor(private readonly servicioService: ServicioService) {}

  // Obtener todos los servicios
  @Get()
  findAll(): Promise<Servicio[]> {
    return this.servicioService.findAll();
  }

  // Obtener un servicio por ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Servicio> {
    return this.servicioService.findOne(+id);
  }

  // Crear un nuevo servicio
  @Post()
  create(@Body() createServicioDto: CreateServicioDto): Promise<Servicio> {
    return this.servicioService.create(createServicioDto);
  }

  // Actualizar un servicio
  @Put(':id')
  update(@Param('id') id: string, @Body() updateServicioDto: UpdateServicioDto): Promise<Servicio> {
    return this.servicioService.update(+id, updateServicioDto);
  }

  // Eliminar un servicio
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.servicioService.remove(+id);
  }
}
