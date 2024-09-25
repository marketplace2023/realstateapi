import { IsString } from 'class-validator';
import { Empresa } from 'src/empresa/entities/empresa.entity';

export class CreateRedSocialDto {
  @IsString()
  nombre_red_social: string;

  @IsString()
  url_perfil: string;

  empresa: Empresa; // Relación con la entidad Empresa
}
