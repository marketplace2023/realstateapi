import { PartialType } from '@nestjs/mapped-types';
import { CreateCitacionDto } from './create-citacion.dto';
import { IsString, IsBoolean, IsDate, IsOptional } from 'class-validator';
import { Empresa } from 'src/empresa/entities/empresa.entity';

export class UpdateCitacionDto extends PartialType(CreateCitacionDto) {

  @IsOptional()
  @IsString()
  nombre_citacion?: string;

  @IsOptional()
  @IsString()
  url_citacion?: string;

  @IsOptional()
  @IsBoolean()
  nap_consistente?: boolean;

  @IsOptional()
  @IsDate()
  fecha_citacion?: Date;

  @IsOptional()
  empresa?: Empresa;
}
