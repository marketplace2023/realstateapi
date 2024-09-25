import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpresaDto } from './create-empresa.dto';
import { IsString, IsArray, IsEmail, IsNumber, IsOptional } from 'class-validator';

export class UpdateEmpresaDto extends PartialType(CreateEmpresaDto) {@IsOptional()
    @IsString()
    nombre_empresa?: string;
  
    @IsOptional()
    @IsString()
    direccion?: string;
  
    @IsOptional()
    @IsString()
    telefono_principal?: string;
  
    @IsOptional()
    @IsString()
    telefono_secundario?: string;
  
    @IsOptional()
    @IsEmail()
    email?: string;
  
    @IsOptional()
    @IsString()
    sitio_web?: string;
  
    @IsOptional()
    @IsArray()
    horario?: string[];
  
    @IsOptional()
    @IsString()
    slogan?: string;
  
    @IsOptional()
    @IsNumber()
    inicio_operaciones?: number;
  
    @IsOptional()
    @IsString()
    certificacion?: string;
  
    @IsOptional()
    @IsString()
    posicion?: string;
  }
