import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTestimonioDto } from './dto/create-testimonio.dto';
import { UpdateTestimonioDto } from './dto/update-testimonio.dto';
import { Testimonio } from './entities/testimonio.entity';

@Injectable()
export class TestimonioService {
  constructor(
    @InjectRepository(Testimonio)
    private testimonioRepository: Repository<Testimonio>,
  ) {}

  // Obtener todos los testimonios
  findAll(): Promise<Testimonio[]> {
    return this.testimonioRepository.find({ relations: ['empresa'] });
  }

  // Obtener un testimonio por ID
  findOne(id: number): Promise<Testimonio> {
    return this.testimonioRepository.findOne({ where: { id_testimonio: id }, relations: ['empresa'] });
  }

  // Crear un nuevo testimonio
  create(createTestimonioDto: CreateTestimonioDto): Promise<Testimonio> {
    const nuevoTestimonio = this.testimonioRepository.create(createTestimonioDto);
    return this.testimonioRepository.save(nuevoTestimonio);
  }

  // Actualizar un testimonio
  async update(id: number, updateTestimonioDto: UpdateTestimonioDto): Promise<Testimonio> {
    await this.testimonioRepository.update(id, updateTestimonioDto);
    return this.testimonioRepository.findOne({ where: { id_testimonio: id }, relations: ['empresa'] });
  }

  // Eliminar un testimonio
  async remove(id: number): Promise<void> {
    await this.testimonioRepository.delete(id);
  }
}
