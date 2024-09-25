import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private empresaRepository: Repository<Empresa>,
  ) {}

  // Obtener todas las empresas
  findAll(): Promise<Empresa[]> {
    return this.empresaRepository.find();
  }

  // Obtener una empresa por ID
  findOne(id: number): Promise<Empresa> {
    return this.empresaRepository.findOne({ where: { id_empresa: id } });
  }

  // Crear una nueva empresa
  create(empresa: Empresa): Promise<Empresa> {
    return this.empresaRepository.save(empresa);
  }

  // Actualizar una empresa
  async update(id: number, empresa: Empresa): Promise<Empresa> {
    await this.empresaRepository.update(id, empresa);
    return this.empresaRepository.findOne({ where: { id_empresa: id } });
  }

  // Eliminar una empresa
  async remove(id: number): Promise<void> {
    await this.empresaRepository.delete(id);
  }
}
