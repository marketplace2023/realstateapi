import { IsString } from 'class-validator';
import { Empresa } from 'src/empresa/entities/empresa.entity';

export class CreateServicioDto {
  @IsString()
  nombre_servicio: string;

  @IsString()
  descripcion_servicio: string;

  empresa: Empresa; // La empresa a la que pertenece el servicio
}
