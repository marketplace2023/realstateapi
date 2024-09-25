import { PartialType } from '@nestjs/mapped-types';
import { CreateBacklinkDto } from './create-backlink.dto';
import { IsString, IsDate, IsNumber, IsOptional } from 'class-validator';
import { Empresa } from 'src/empresa/entities/empresa.entity';

export class UpdateBacklinkDto extends PartialType(CreateBacklinkDto) {

    @IsOptional()
    @IsString()
    url_backlink?: string;
  
    @IsOptional()
    @IsString()
    pagina_destino?: string;
  
    @IsOptional()
    @IsDate()
    fecha_backlink?: Date;
  
    @IsOptional()
    @IsNumber()
    autoridad_dominio?: number;
  
    @IsOptional()
    empresa?: Empresa;
}
