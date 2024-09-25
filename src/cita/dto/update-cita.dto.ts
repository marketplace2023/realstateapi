import { PartialType } from '@nestjs/mapped-types';
import { CreateCitaDto } from './create-cita.dto';
import { IsString, IsDate, IsEmail, IsOptional } from 'class-validator';
import { Agente } from 'src/agente/entities/agente.entity';

export class UpdateCitaDto extends PartialType(CreateCitaDto) {

    @IsOptional()
    @IsDate()
    fecha_hora?: Date;
  
    @IsOptional()
    @IsString()
    nombre_cliente?: string;
  
    @IsOptional()
    @IsString()
    telefono_cliente?: string;
  
    @IsOptional()
    @IsEmail()
    email_cliente?: string;
  
    @IsOptional()
    agente?: Agente;
}
