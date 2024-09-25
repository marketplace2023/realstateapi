import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MetodoPagoService } from './metodopago.service';
import { MetodoPago } from './entities/metodopago.entity';
import { CreateMetodoPagoDto } from './dto/create-metodopago.dto';
import { UpdateMetodoPagoDto } from './dto/update-metodopago.dto';


@Controller('metodos-pago')
export class MetodoPagoController {
  constructor(private readonly metodoPagoService: MetodoPagoService) {}

  // Obtener todos los métodos de pago
  @Get()
  findAll(): Promise<MetodoPago[]> {
    return this.metodoPagoService.findAll();
  }

  // Obtener un método de pago por ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<MetodoPago> {
    return this.metodoPagoService.findOne(+id);
  }

  // Crear un nuevo método de pago
  @Post()
  create(@Body() createMetodoPagoDto: CreateMetodoPagoDto): Promise<MetodoPago> {
    return this.metodoPagoService.create(createMetodoPagoDto);
  }

  // Actualizar un método de pago
  @Put(':id')
  update(@Param('id') id: string, @Body() updateMetodoPagoDto: UpdateMetodoPagoDto): Promise<MetodoPago> {
    return this.metodoPagoService.update(+id, updateMetodoPagoDto);
  }

  // Eliminar un método de pago
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.metodoPagoService.remove(+id);
  }
}
