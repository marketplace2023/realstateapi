import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAgenteDto } from './dto/create-agente.dto';
import { UpdateAgenteDto } from './dto/update-agente.dto';
import { Agente } from './entities/agente.entity';

@Injectable()
export class AgenteService {
  constructor(
    @InjectRepository(Agente)
    private agenteRepository: Repository<Agente>,
  ) {}

  // Obtener todos los agentes
  findAll(): Promise<Agente[]> {
    return this.agenteRepository.find({ relations: ['empresa'] });
  }

  // Obtener un agente por ID
  findOne(id: number): Promise<Agente> {
    return this.agenteRepository.findOne({ where: { id_agente: id }, relations: ['empresa'] });
  }

  // Crear un nuevo agente
  create(createAgenteDto: CreateAgenteDto): Promise<Agente> {
    const nuevoAgente = this.agenteRepository.create(createAgenteDto);
    return this.agenteRepository.save(nuevoAgente);
  }

  // Actualizar un agente
  async update(id: number, updateAgenteDto: UpdateAgenteDto): Promise<Agente> {
    await this.agenteRepository.update(id, updateAgenteDto);
    return this.agenteRepository.findOne({ where: { id_agente: id }, relations: ['empresa'] });
  }

  // Eliminar un agente
  async remove(id: number): Promise<void> {
    await this.agenteRepository.delete(id);
  }
}
