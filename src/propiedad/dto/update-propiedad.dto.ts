import { PartialType } from '@nestjs/mapped-types';
import { CreatePropiedadDto } from './create-propiedad.dto';
import { IsString, IsDecimal, IsOptional } from 'class-validator';
import { Empresa } from 'src/empresa/entities/empresa.entity';

export class UpdatePropiedadDto extends PartialType(CreatePropiedadDto) {

    @IsOptional()
    @IsString()
    nombre_propiedad?: string;
  
    @IsOptional()
    @IsString()
    ubicacion?: string;
  
    @IsOptional()
    @IsString()
    tipo_propiedad?: string;
  
    @IsOptional()
    @IsString()
    descripcion?: string;
  
    @IsOptional()
    @IsDecimal()
    precio?: number;
  
    @IsOptional()
    empresa?: Empresa;

}
