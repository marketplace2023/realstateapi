import { Empresa } from "src/empresa/entities/empresa.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Backlink {
  @PrimaryGeneratedColumn()
  id_backlink: number;

  @Column()
  url_backlink: string;

  @Column()
  pagina_destino: string;

  @Column()
  fecha_backlink: Date;

  @Column()
  autoridad_dominio: number;

  @ManyToOne(() => Empresa, (empresa) => empresa.backlinks)
  empresa: Empresa;
}