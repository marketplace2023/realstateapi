import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCitacionDto } from './dto/create-citacion.dto';
import { UpdateCitacionDto } from './dto/update-citacion.dto';
import { Citacion } from './entities/citacion.entity';

@Injectable()
export class CitacionService {
  constructor(
    @InjectRepository(Citacion)
    private citacionRepository: Repository<Citacion>,
  ) {}

  // Obtener todas las citaciones
  findAll(): Promise<Citacion[]> {
    return this.citacionRepository.find({ relations: ['empresa'] });
  }

  // Obtener una citación por ID
  findOne(id: number): Promise<Citacion> {
    return this.citacionRepository.findOne({
      where: { id_citacion: id },
      relations: ['empresa'],
    });
  }

  // Crear una nueva citación
  create(createCitacionDto: CreateCitacionDto): Promise<Citacion> {
    const nuevaCitacion = this.citacionRepository.create(createCitacionDto);
    return this.citacionRepository.save(nuevaCitacion);
  }

  // Actualizar una citación
  async update(id: number, updateCitacionDto: UpdateCitacionDto): Promise<Citacion> {
    await this.citacionRepository.update(id, updateCitacionDto);
    return this.citacionRepository.findOne({
      where: { id_citacion: id },
      relations: ['empresa'],
    });
  }

  // Eliminar una citación
  async remove(id: number): Promise<void> {
    await this.citacionRepository.delete(id);
  }
}
