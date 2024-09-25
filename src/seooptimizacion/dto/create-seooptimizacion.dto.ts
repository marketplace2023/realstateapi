import { IsBoolean, IsString } from 'class-validator';
import { Empresa } from 'src/empresa/entities/empresa.entity';

export class CreateSEOOptimizacionDto {
  @IsBoolean()
  nap_consistente: boolean;

  @IsString()
  palabras_clave: string;

  @IsBoolean()
  backlinks: boolean;

  empresa: Empresa;  // Relación con la entidad Empresa
}
