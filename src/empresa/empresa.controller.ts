import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { Empresa } from './entities/empresa.entity';

@Controller('empresas')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  // Obtener todas las empresas
  @Get()
  findAll(): Promise<Empresa[]> {
    return this.empresaService.findAll();
  }

  // Obtener una empresa por ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Empresa> {
    return this.empresaService.findOne(+id);
  }

  // Crear una nueva empresa
  @Post()
  create(@Body() empresa: Empresa): Promise<Empresa> {
    return this.empresaService.create(empresa);
  }

  // Actualizar una empresa
  @Put(':id')
  update(@Param('id') id: string, @Body() empresa: Empresa): Promise<Empresa> {
    return this.empresaService.update(+id, empresa);
  }

  // Eliminar una empresa
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.empresaService.remove(+id);
  }
}
