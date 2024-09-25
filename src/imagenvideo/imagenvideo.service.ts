import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImagenVideo } from './entities/imagenvideo.entity';
import { CreateImagenVideoDto } from './dto/create-imagenvideo.dto';
import { UpdateImagenVideoDto } from './dto/update-imagenvideo.dto';


@Injectable()
export class ImagenVideoService {
  constructor(
    @InjectRepository(ImagenVideo)
    private imagenVideoRepository: Repository<ImagenVideo>,
  ) {}

  // Obtener todas las imágenes o videos
  findAll(): Promise<ImagenVideo[]> {
    return this.imagenVideoRepository.find({ relations: ['empresa', 'propiedad'] });
  }

  // Obtener una imagen o video por ID
  findOne(id: number): Promise<ImagenVideo> {
    return this.imagenVideoRepository.findOne({
      where: { id_media: id },
      relations: ['empresa', 'propiedad'],
    });
  }

  // Crear una nueva imagen o video
  create(createImagenVideoDto: CreateImagenVideoDto): Promise<ImagenVideo> {
    const nuevoMedia = this.imagenVideoRepository.create(createImagenVideoDto);
    return this.imagenVideoRepository.save(nuevoMedia);
  }

  // Actualizar una imagen o video
  async update(id: number, updateImagenVideoDto: UpdateImagenVideoDto): Promise<ImagenVideo> {
    await this.imagenVideoRepository.update(id, updateImagenVideoDto);
    return this.imagenVideoRepository.findOne({
      where: { id_media: id },
      relations: ['empresa', 'propiedad'],
    });
  }

  // Eliminar una imagen o video
  async remove(id: number): Promise<void> {
    await this.imagenVideoRepository.delete(id);
  }
}
