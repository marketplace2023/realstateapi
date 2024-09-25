import { IsString } from 'class-validator';
import { Empresa } from 'src/empresa/entities/empresa.entity';

export class CreateMetodoPagoDto {
  @IsString()
  nombre_metodo_pago: string;

  empresa: Empresa;  // Relación con la entidad Empresa
}
