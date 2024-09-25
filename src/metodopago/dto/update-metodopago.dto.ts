import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsOptional } from 'class-validator';
import { CreateMetodoPagoDto } from './create-metodopago.dto';
import { Empresa } from 'src/empresa/entities/empresa.entity';

export class UpdateMetodoPagoDto extends PartialType(CreateMetodoPagoDto) {

    @IsOptional()
    @IsString()
    nombre_metodo_pago?: string;
  
    @IsOptional()
    empresa?: Empresa;
}
