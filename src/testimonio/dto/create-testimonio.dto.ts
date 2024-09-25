import { IsString } from 'class-validator';
import { Empresa } from 'src/empresa/entities/empresa.entity';

export class CreateTestimonioDto {
  @IsString()
  nombre_cliente: string;

  @IsString()
  comentario: string;

  empresa: Empresa; // Relación con la entidad Empresa
}
