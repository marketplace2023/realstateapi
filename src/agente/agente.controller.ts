import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AgenteService } from './agente.service';
import { CreateAgenteDto } from './dto/create-agente.dto';
import { UpdateAgenteDto } from './dto/update-agente.dto';
import { Agente } from './entities/agente.entity';

@Controller('agentes')
export class AgenteController {
  constructor(private readonly agenteService: AgenteService) {}

  // Obtener todos los agentes
  @Get()
  findAll(): Promise<Agente[]> {
    return this.agenteService.findAll();
  }

  // Obtener un agente por ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Agente> {
    return this.agenteService.findOne(+id);
  }

  // Crear un nuevo agente
  @Post()
  create(@Body() createAgenteDto: CreateAgenteDto): Promise<Agente> {
    return this.agenteService.create(createAgenteDto);
  }

  // Actualizar un agente
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAgenteDto: UpdateAgenteDto): Promise<Agente> {
    return this.agenteService.update(+id, updateAgenteDto);
  }

  // Eliminar un agente
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.agenteService.remove(+id);
  }
}
