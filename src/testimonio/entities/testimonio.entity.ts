import { Empresa } from "src/empresa/entities/empresa.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Testimonio {
  @PrimaryGeneratedColumn()
  id_testimonio: number;

  @Column()
  nombre_cliente: string;

  @Column("text")
  comentario: string;

  @ManyToOne(() => Empresa, (empresa) => empresa.testimonios)
  empresa: Empresa;
}