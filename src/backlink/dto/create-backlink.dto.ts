import { IsString, IsDate, IsNumber } from 'class-validator';
import { Empresa } from 'src/empresa/entities/empresa.entity';

export class CreateBacklinkDto {
  @IsString()
  url_backlink: string;

  @IsString()
  pagina_destino: string;

  @IsDate()
  fecha_backlink: Date;

  @IsNumber()
  autoridad_dominio: number;

  empresa: Empresa; // Relación con la entidad Empresa
}
