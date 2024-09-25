import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { Cita } from './entities/cita.entity';

@Injectable()
export class CitaService {
  constructor(
    @InjectRepository(Cita)
    private citaRepository: Repository<Cita>,
  ) {}

  // Obtener todas las citas
  findAll(): Promise<Cita[]> {
    return this.citaRepository.find({ relations: ['agente'] });
  }

  // Obtener una cita por ID
  findOne(id: number): Promise<Cita> {
    return this.citaRepository.findOne({
      where: { id_cita: id },
      relations: ['agente'],
    });
  }

  // Crear una nueva cita
  create(createCitaDto: CreateCitaDto): Promise<Cita> {
    const nuevaCita = this.citaRepository.create(createCitaDto);
    return this.citaRepository.save(nuevaCita);
  }

  // Actualizar una cita
  async update(id: number, updateCitaDto: UpdateCitaDto): Promise<Cita> {
    await this.citaRepository.update(id, updateCitaDto);
    return this.citaRepository.findOne({
      where: { id_cita: id },
      relations: ['agente'],
    });
  }

  // Eliminar una cita
  async remove(id: number): Promise<void> {
    await this.citaRepository.delete(id);
  }
}
