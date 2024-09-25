import { IsString, IsDate, IsEmail } from 'class-validator';
import { Agente } from 'src/agente/entities/agente.entity';

export class CreateCitaDto {
  @IsDate()
  fecha_hora: Date;

  @IsString()
  nombre_cliente: string;

  @IsString()
  telefono_cliente: string;

  @IsEmail()
  email_cliente: string;

  agente: Agente; // Relación con la entidad Agente
}
