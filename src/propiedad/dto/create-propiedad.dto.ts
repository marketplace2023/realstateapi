import { IsString, IsDecimal } from 'class-validator';
import { Empresa } from 'src/empresa/entities/empresa.entity';

export class CreatePropiedadDto {
  @IsString()
  nombre_propiedad: string;

  @IsString()
  ubicacion: string;

  @IsString()
  tipo_propiedad: string;

  @IsString()
  descripcion: string;

  @IsDecimal()
  precio: number;

  empresa: Empresa;  // Relación con la entidad Empresa
}
