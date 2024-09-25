import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { Servicio } from './entities/servicio.entity';

@Injectable()
export class ServicioService {
  constructor(
    @InjectRepository(Servicio)
    private servicioRepository: Repository<Servicio>,
  ) {}

  // Obtener todos los servicios
  findAll(): Promise<Servicio[]> {
    return this.servicioRepository.find({ relations: ['empresa'] });
  }

  // Obtener un servicio por ID
  findOne(id: number): Promise<Servicio> {
    return this.servicioRepository.findOne({ where: { id_servicio: id }, relations: ['empresa'] });
  }

  // Crear un nuevo servicio
  create(createServicioDto: CreateServicioDto): Promise<Servicio> {
    const nuevoServicio = this.servicioRepository.create(createServicioDto);
    return this.servicioRepository.save(nuevoServicio);
  }

  // Actualizar un servicio
  async update(id: number, updateServicioDto: UpdateServicioDto): Promise<Servicio> {
    await this.servicioRepository.update(id, updateServicioDto);
    return this.servicioRepository.findOne({ where: { id_servicio: id }, relations: ['empresa'] });
  }

  // Eliminar un servicio
  async remove(id: number): Promise<void> {
    await this.servicioRepository.delete(id);
  }
}
