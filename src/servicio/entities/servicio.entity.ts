import { Empresa } from "src/empresa/entities/empresa.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Servicio {
  @PrimaryGeneratedColumn()
  id_servicio: number;

  @Column()
  nombre_servicio: string;

  @Column("text")
  descripcion_servicio: string;

  @ManyToOne(() => Empresa, (empresa) => empresa.servicios)
  empresa: Empresa;
}