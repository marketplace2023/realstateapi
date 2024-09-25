import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RedSocialService } from './redsocial.service';
import { RedSocial } from './entities/redsocial.entity';
import { CreateRedSocialDto } from './dto/create-redsocial.dto';
import { UpdateRedSocialDto } from './dto/update-redsocial.dto';


@Controller('redes-sociales')
export class RedSocialController {
  constructor(private readonly redSocialService: RedSocialService) {}

  // Obtener todas las redes sociales
  @Get()
  findAll(): Promise<RedSocial[]> {
    return this.redSocialService.findAll();
  }

  // Obtener una red social por ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<RedSocial> {
    return this.redSocialService.findOne(+id);
  }

  // Crear una nueva red social
  @Post()
  create(@Body() createRedSocialDto: CreateRedSocialDto): Promise<RedSocial> {
    return this.redSocialService.create(createRedSocialDto);
  }

  // Actualizar una red social
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRedSocialDto: UpdateRedSocialDto): Promise<RedSocial> {
    return this.redSocialService.update(+id, updateRedSocialDto);
  }

  // Eliminar una red social
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.redSocialService.remove(+id);
  }
}
