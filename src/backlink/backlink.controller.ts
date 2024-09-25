import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BacklinkService } from './backlink.service';
import { CreateBacklinkDto } from './dto/create-backlink.dto';
import { UpdateBacklinkDto } from './dto/update-backlink.dto';
import { Backlink } from './entities/backlink.entity';

@Controller('backlinks')
export class BacklinkController {
  constructor(private readonly backlinkService: BacklinkService) {}

  // Obtener todos los backlinks
  @Get()
  findAll(): Promise<Backlink[]> {
    return this.backlinkService.findAll();
  }

  // Obtener un backlink por ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Backlink> {
    return this.backlinkService.findOne(+id);
  }

  // Crear un nuevo backlink
  @Post()
  create(@Body() createBacklinkDto: CreateBacklinkDto): Promise<Backlink> {
    return this.backlinkService.create(createBacklinkDto);
  }

  // Actualizar un backlink
  @Put(':id')
  update(@Param('id') id: string, @Body() updateBacklinkDto: UpdateBacklinkDto): Promise<Backlink> {
    return this.backlinkService.update(+id, updateBacklinkDto);
  }

  // Eliminar un backlink
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.backlinkService.remove(+id);
  }
}
