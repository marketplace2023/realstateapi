import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ImagenVideoService } from './imagenvideo.service';
import { ImagenVideo } from './entities/imagenvideo.entity';
import { CreateImagenVideoDto } from './dto/create-imagenvideo.dto';
import { UpdateImagenVideoDto } from './dto/update-imagenvideo.dto';


@Controller('imagenes-videos')
export class ImagenVideoController {
  constructor(private readonly imagenVideoService: ImagenVideoService) {}

  // Obtener todas las imágenes o videos
  @Get()
  findAll(): Promise<ImagenVideo[]> {
    return this.imagenVideoService.findAll();
  }

  // Obtener una imagen o video por ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<ImagenVideo> {
    return this.imagenVideoService.findOne(+id);
  }

  // Crear una nueva imagen o video
  @Post()
  create(@Body() createImagenVideoDto: CreateImagenVideoDto): Promise<ImagenVideo> {
    return this.imagenVideoService.create(createImagenVideoDto);
  }

  // Actualizar una imagen o video
  @Put(':id')
  update(@Param('id') id: string, @Body() updateImagenVideoDto: UpdateImagenVideoDto): Promise<ImagenVideo> {
    return this.imagenVideoService.update(+id, updateImagenVideoDto);
  }

  // Eliminar una imagen o video
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.imagenVideoService.remove(+id);
  }
}
