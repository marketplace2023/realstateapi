import { IsString, IsBoolean, IsDate } from 'class-validator';
import { Empresa } from 'src/empresa/entities/empresa.entity';

export class CreateCitacionDto {
  @IsString()
  nombre_citacion: string;

  @IsString()
  url_citacion: string;

  @IsBoolean()
  nap_consistente: boolean;

  @IsDate()
  fecha_citacion: Date;

  empresa: Empresa; // Relación con la entidad Empresa
}
