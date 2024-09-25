import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Empresa } from 'src/empresa/entities/empresa.entity';

export class CreateAgenteDto {
  @IsString()
  nombre_completo: string;

  @IsNumber()
  años_experiencia: number;

  @IsString()
  descripcion_corta: string;

  @IsString()
  descripcion_larga: string;

  @IsOptional()
  empresa: Empresa;  
}
