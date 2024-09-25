import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsString, IsOptional } from 'class-validator';
import { CreateSEOOptimizacionDto } from './create-seooptimizacion.dto';
import { Empresa } from 'src/empresa/entities/empresa.entity';

export class UpdateSEOOptimizacionDto extends PartialType(CreateSEOOptimizacionDto) {

  @IsOptional()
  @IsBoolean()
  nap_consistente?: boolean;

  @IsOptional()
  @IsString()
  palabras_clave?: string;

  @IsOptional()
  @IsBoolean()
  backlinks?: boolean;

  @IsOptional()
  empresa?: Empresa;
}
