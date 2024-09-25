import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePropiedadDto } from './dto/create-propiedad.dto';
import { UpdatePropiedadDto } from './dto/update-propiedad.dto';
import { Propiedad } from './entities/propiedad.entity';

@Injectable()
export class PropiedadService {
  constructor(
    @InjectRepository(Propiedad)
    private propiedadRepository: Repository<Propiedad>,
  ) {}

  // Obtener todas las propiedades
  findAll(): Promise<Propiedad[]> {
    return this.propiedadRepository.find({ relations: ['empresa', 'imagenesVideos'] });
  }

  // Obtener una propiedad por ID
  findOne(id: number): Promise<Propiedad> {
    return this.propiedadRepository.findOne({
      where: { id_propiedad: id },
      relations: ['empresa', 'imagenesVideos'],
    });
  }

  // Crear una nueva propiedad
  create(createPropiedadDto: CreatePropiedadDto): Promise<Propiedad> {
    const nuevaPropiedad = this.propiedadRepository.create(createPropiedadDto);
    return this.propiedadRepository.save(nuevaPropiedad);
  }

  // Actualizar una propiedad
  async update(id: number, updatePropiedadDto: UpdatePropiedadDto): Promise<Propiedad> {
    await this.propiedadRepository.update(id, updatePropiedadDto);
    return this.propiedadRepository.findOne({
      where: { id_propiedad: id },
      relations: ['empresa', 'imagenesVideos'],
    });
  }

  // Eliminar una propiedad
  async remove(id: number): Promise<void> {
    await this.propiedadRepository.delete(id);
  }
}
