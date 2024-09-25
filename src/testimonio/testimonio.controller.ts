import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TestimonioService } from './testimonio.service';
import { CreateTestimonioDto } from './dto/create-testimonio.dto';
import { UpdateTestimonioDto } from './dto/update-testimonio.dto';
import { Testimonio } from './entities/testimonio.entity';

@Controller('testimonios')
export class TestimonioController {
  constructor(private readonly testimonioService: TestimonioService) {}

  // Obtener todos los testimonios
  @Get()
  findAll(): Promise<Testimonio[]> {
    return this.testimonioService.findAll();
  }

  // Obtener un testimonio por ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Testimonio> {
    return this.testimonioService.findOne(+id);
  }

  // Crear un nuevo testimonio
  @Post()
  create(@Body() createTestimonioDto: CreateTestimonioDto): Promise<Testimonio> {
    return this.testimonioService.create(createTestimonioDto);
  }

  // Actualizar un testimonio
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTestimonioDto: UpdateTestimonioDto): Promise<Testimonio> {
    return this.testimonioService.update(+id, updateTestimonioDto);
  }

  // Eliminar un testimonio
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.testimonioService.remove(+id);
  }
}
