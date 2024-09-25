import { PartialType } from '@nestjs/mapped-types';
import { CreateRedSocialDto } from './create-redsocial.dto';
import { IsString, IsOptional } from 'class-validator';
import { Empresa } from 'src/empresa/entities/empresa.entity';

export class UpdateRedSocialDto extends PartialType(CreateRedSocialDto) {

    @IsOptional()
    @IsString()
    nombre_red_social?: string;
  
    @IsOptional()
    @IsString()
    url_perfil?: string;
  
    @IsOptional()
    empresa?: Empresa; 
}
