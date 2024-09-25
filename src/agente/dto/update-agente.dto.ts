import { PartialType } from '@nestjs/mapped-types';
import { CreateAgenteDto } from './create-agente.dto';
import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Empresa } from 'src/empresa/entities/empresa.entity';

export class UpdateAgenteDto extends PartialType(CreateAgenteDto) { 
    @IsOptional()
    @IsString()
    nombre_completo?: string;
  
    @IsOptional()
    @IsNumber()
    años_experiencia?: number;
  
    @IsOptional()
    @IsString()
    descripcion_corta?: string;
  
    @IsOptional()
    @IsString()
    descripcion_larga?: string;
  
    @IsOptional()
    empresa?: Empresa;}
