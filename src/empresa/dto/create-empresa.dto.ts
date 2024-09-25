import { IsString, IsArray, IsEmail, IsNumber, IsOptional } from 'class-validator';

export class CreateEmpresaDto {
  @IsString()
  nombre_empresa: string;

  @IsString()
  direccion: string;

  @IsString()
  telefono_principal: string;

  @IsString()
  telefono_secundario: string;

  @IsEmail()
  email: string;

  @IsString()
  sitio_web: string;

  @IsArray()
  horario: string[];

  @IsString()
  slogan: string;

  @IsNumber()
  inicio_operaciones: number;

  @IsString()
  certificacion: string;

  @IsString()
  posicion: string;
}
