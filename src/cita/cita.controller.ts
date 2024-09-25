import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CitaService } from './cita.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { Cita } from './entities/cita.entity';

@Controller('citas')
export class CitaController {
  constructor(private readonly citaService: CitaService) {}

  // Obtener todas las citas
  @Get()
  findAll(): Promise<Cita[]> {
    return this.citaService.findAll();
  }

  // Obtener una cita por ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Cita> {
    return this.citaService.findOne(+id);
  }

  // Crear una nueva cita
  @Post()
  create(@Body() createCitaDto: CreateCitaDto): Promise<Cita> {
    return this.citaService.create(createCitaDto);
  }

  // Actualizar una cita
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCitaDto: UpdateCitaDto): Promise<Cita> {
    return this.citaService.update(+id, updateCitaDto);
  }

  // Eliminar una cita
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.citaService.remove(+id);
  }
}
