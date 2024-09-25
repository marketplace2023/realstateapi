import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBacklinkDto } from './dto/create-backlink.dto';
import { UpdateBacklinkDto } from './dto/update-backlink.dto';
import { Backlink } from './entities/backlink.entity';

@Injectable()
export class BacklinkService {
  constructor(
    @InjectRepository(Backlink)
    private backlinkRepository: Repository<Backlink>,
  ) {}

  // Obtener todos los backlinks
  findAll(): Promise<Backlink[]> {
    return this.backlinkRepository.find({ relations: ['empresa'] });
  }

  // Obtener un backlink por ID
  findOne(id: number): Promise<Backlink> {
    return this.backlinkRepository.findOne({
      where: { id_backlink: id },
      relations: ['empresa'],
    });
  }

  // Crear un nuevo backlink
  create(createBacklinkDto: CreateBacklinkDto): Promise<Backlink> {
    const nuevoBacklink = this.backlinkRepository.create(createBacklinkDto);
    return this.backlinkRepository.save(nuevoBacklink);
  }

  // Actualizar un backlink
  async update(id: number, updateBacklinkDto: UpdateBacklinkDto): Promise<Backlink> {
    await this.backlinkRepository.update(id, updateBacklinkDto);
    return this.backlinkRepository.findOne({
      where: { id_backlink: id },
      relations: ['empresa'],
    });
  }

  // Eliminar un backlink
  async remove(id: number): Promise<void> {
    await this.backlinkRepository.delete(id);
  }
}
