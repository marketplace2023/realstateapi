import { PartialType } from '@nestjs/mapped-types';
import { CreateTestimonioDto } from './create-testimonio.dto';
import { IsString, IsOptional } from 'class-validator';
import { Empresa } from 'src/empresa/entities/empresa.entity';

export class UpdateTestimonioDto extends PartialType(CreateTestimonioDto) {

    @IsOptional()
    @IsString()
    nombre_cliente?: string;
  
    @IsOptional()
    @IsString()
    comentario?: string;
  
    @IsOptional()
    empresa?: Empresa;
}
