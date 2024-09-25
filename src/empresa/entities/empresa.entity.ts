import { Agente } from "src/agente/entities/agente.entity";
import { Backlink } from "src/backlink/entities/backlink.entity";
import { Citacion } from "src/citacion/entities/citacion.entity";
import { ImagenVideo } from "src/imagenvideo/entities/imagenvideo.entity";
import { MetodoPago } from "src/metodopago/entities/metodopago.entity";
import { Propiedad } from "src/propiedad/entities/propiedad.entity";
import { RedSocial } from "src/redsocial/entities/redsocial.entity";
import { SEOOptimizacion } from "src/seooptimizacion/entities/seooptimizacion.entity";
import { Servicio } from "src/servicio/entities/servicio.entity";
import { Testimonio } from "src/testimonio/entities/testimonio.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";


@Entity()
export class Empresa {
  @PrimaryGeneratedColumn()
  id_empresa: number;

  @Column()
  nombre_empresa: string;

  @Column()
  direccion: string;

  @Column()
  telefono_principal: string;

  @Column()
  telefono_secundario: string;

  @Column()
  email: string;

  @Column()
  sitio_web: string;

  @Column()
  horario: string[];

  @Column()
  slogan: string;

  @Column()
  inicio_operaciones: number;

  @Column()
  certificacion: string;

  @Column()
  posicion: string;

  @OneToMany(() => Agente, (agente) => agente.empresa)
  agentes: Agente[];

  @OneToMany(() => Servicio, (servicio) => servicio.empresa)
  servicios: Servicio[];

  @OneToMany(() => Testimonio, (testimonio) => testimonio.empresa)
  testimonios: Testimonio[];

  @OneToMany(() => Propiedad, (propiedad) => propiedad.empresa)
  propiedades: Propiedad[];

  @OneToMany(() => RedSocial, (redSocial) => redSocial.empresa)
  redesSociales: RedSocial[];

  @OneToMany(() => MetodoPago, (metodoPago) => metodoPago.empresa)
  metodosPago: MetodoPago[];

  @OneToMany(() => ImagenVideo, (imagenVideo) => imagenVideo.empresa)
  imagenesVideos: ImagenVideo[];

  @OneToMany(
    () => SEOOptimizacion,
    (seoOptimizacion) => seoOptimizacion.empresa
  )
  seoOptimizaciones: SEOOptimizacion[];

  @OneToMany(() => Citacion, (citacion) => citacion.empresa)
  citaciones: Citacion[];

  @OneToMany(() => Backlink, (backlink) => backlink.empresa)
  backlinks: Backlink[];
}