import { IsEnum, IsString, IsOptional } from 'class-validator';
import { Empresa } from 'src/empresa/entities/empresa.entity';
import { Propiedad } from 'src/propiedad/entities/propiedad.entity';


export class CreateImagenVideoDto {
  @IsEnum(["imagen", "video"])
  tipo_media: "imagen" | "video";

  @IsString()
  url_media: string;

  @IsString()
  descripcion: string;

  @IsOptional()
  propiedad?: Propiedad;  // Relación opcional con la entidad Propiedad

  empresa: Empresa;  // Relación con la entidad Empresa
}
