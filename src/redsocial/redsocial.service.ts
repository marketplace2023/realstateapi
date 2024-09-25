import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RedSocial } from './entities/redsocial.entity';
import { CreateRedSocialDto } from './dto/create-redsocial.dto';
import { UpdateRedSocialDto } from './dto/update-redsocial.dto';


@Injectable()
export class RedSocialService {
  constructor(
    @InjectRepository(RedSocial)
    private redSocialRepository: Repository<RedSocial>,
  ) {}

  // Obtener todas las redes sociales
  findAll(): Promise<RedSocial[]> {
    return this.redSocialRepository.find({ relations: ['empresa'] });
  }

  // Obtener una red social por ID
  findOne(id: number): Promise<RedSocial> {
    return this.redSocialRepository.findOne({
      where: { id_red_social: id },
      relations: ['empresa'],
    });
  }

  // Crear una nueva red social
  create(createRedSocialDto: CreateRedSocialDto): Promise<RedSocial> {
    const nuevaRedSocial = this.redSocialRepository.create(createRedSocialDto);
    return this.redSocialRepository.save(nuevaRedSocial);
  }

  // Actualizar una red social
  async update(id: number, updateRedSocialDto: UpdateRedSocialDto): Promise<RedSocial> {
    await this.redSocialRepository.update(id, updateRedSocialDto);
    return this.redSocialRepository.findOne({
      where: { id_red_social: id },
      relations: ['empresa'],
    });
  }

  // Eliminar una red social
  async remove(id: number): Promise<void> {
    await this.redSocialRepository.delete(id);
  }
}
