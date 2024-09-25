import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
  } from "typeorm";
  import { ImagenVideo } from "./imagen-video.entity";
import { Empresa } from "src/empresa/entities/empresa.entity";
  
  @Entity()
  export class Propiedad {
    @PrimaryGeneratedColumn()
    id_propiedad: number;
  
    @Column()
    nombre_propiedad: string;
  
    @Column()
    ubicacion: string;
  
    @Column()
    tipo_propiedad: string;
  
    @Column("text")
    descripcion: string;
  
    @Column("decimal", { precision: 10, scale: 2 })
    precio: number;
  
    @ManyToOne(() => Empresa, (empresa) => empresa.propiedades)
    empresa: Empresa;
  
    @OneToMany(() => ImagenVideo, (imagenVideo) => imagenVideo.propiedad)
    imagenesVideos: ImagenVideo[];
  }