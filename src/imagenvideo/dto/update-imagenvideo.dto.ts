import { PartialType } from '@nestjs/mapped-types';
import { CreateImagenVideoDto } from './create-imagenvideo.dto';
import { IsEnum, IsString, IsOptional } from 'class-validator';
import { Propiedad } from 'src/propiedad/entities/propiedad.entity';
import { Empresa } from 'src/empresa/entities/empresa.entity';

export class UpdateImagenVideoDto extends PartialType(CreateImagenVideoDto) {
    
    @IsOptional()
    @IsEnum(["imagen", "video"])
    tipo_media?: "imagen" | "video";
  
    @IsOptional()
    @IsString()
    url_media?: string;
  
    @IsOptional()
    @IsString()
    descripcion?: string;
  
    @IsOptional()
    propiedad?: Propiedad;  // Relación opcional con Propiedad
  
    @IsOptional()
    empresa?: Empresa;



}
