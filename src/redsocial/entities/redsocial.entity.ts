import { Empresa } from "src/empresa/entities/empresa.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class RedSocial {
  @PrimaryGeneratedColumn()
  id_red_social: number;

  @Column()
  nombre_red_social: string;

  @Column()
  url_perfil: string;

  @ManyToOne(() => Empresa, (empresa) => empresa.redesSociales)
  empresa: Empresa;
}