import { PartialType } from '@nestjs/mapped-types';
import { CreateServicioDto } from './create-servicio.dto';
import { IsString, IsOptional } from 'class-validator';
import { Empresa } from 'src/empresa/entities/empresa.entity';

export class UpdateServicioDto extends PartialType(CreateServicioDto) {
    
    @IsOptional()
    @IsString()
    nombre_servicio?: string;
  
    @IsOptional()
    @IsString()
    descripcion_servicio?: string;
  
    @IsOptional()
    empresa?: Empresa;}
