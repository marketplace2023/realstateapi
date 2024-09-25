import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MetodoPago } from './entities/metodopago.entity';
import { CreateMetodoPagoDto } from './dto/create-metodopago.dto';
import { UpdateMetodoPagoDto } from './dto/update-metodopago.dto';



@Injectable()
export class MetodoPagoService {
  constructor(
    @InjectRepository(MetodoPago)
    private metodoPagoRepository: Repository<MetodoPago>,
  ) {}

  // Obtener todos los métodos de pago
  findAll(): Promise<MetodoPago[]> {
    return this.metodoPagoRepository.find({ relations: ['empresa'] });
  }

  // Obtener un método de pago por ID
  findOne(id: number): Promise<MetodoPago> {
    return this.metodoPagoRepository.findOne({
      where: { id_metodo_pago: id },
      relations: ['empresa'],
    });
  }

  // Crear un nuevo método de pago
  create(createMetodoPagoDto: CreateMetodoPagoDto): Promise<MetodoPago> {
    const nuevoMetodoPago = this.metodoPagoRepository.create(createMetodoPagoDto);
    return this.metodoPagoRepository.save(nuevoMetodoPago);
  }

  // Actualizar un método de pago
  async update(id: number, updateMetodoPagoDto: UpdateMetodoPagoDto): Promise<MetodoPago> {
    await this.metodoPagoRepository.update(id, updateMetodoPagoDto);
    return this.metodoPagoRepository.findOne({
      where: { id_metodo_pago: id },
      relations: ['empresa'],
    });
  }

  // Eliminar un método de pago
  async remove(id: number): Promise<void> {
    await this.metodoPagoRepository.delete(id);
  }
}
