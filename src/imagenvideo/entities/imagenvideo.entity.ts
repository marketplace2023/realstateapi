import { Empresa } from "src/empresa/entities/empresa.entity";
import { Propiedad } from "src/propiedad/entities/propiedad.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";


@Entity()
export class ImagenVideo {
  @PrimaryGeneratedColumn()
  id_media: number;

  @Column({
    type: "enum",
    enum: ["imagen", "video"],
  })
  tipo_media: "imagen" | "video";

  @Column()
  url_media: string;

  @Column()
  descripcion: string;

  @ManyToOne(() => Propiedad, (propiedad) => propiedad.imagenesVideos, {
    nullable: true,
  })
  propiedad: Propiedad;

  @ManyToOne(() => Empresa, (empresa) => empresa.imagenesVideos)
  empresa: Empresa;
}
