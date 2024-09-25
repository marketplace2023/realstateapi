import { Empresa } from "src/empresa/entities/empresa.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class SEOOptimizacion {
  @PrimaryGeneratedColumn()
  id_seo: number;

  @Column()
  nap_consistente: boolean;

  @Column()
  palabras_clave: string;

  @Column()
  backlinks: boolean;

  @ManyToOne(() => Empresa, (empresa) => empresa.seoOptimizaciones)
  empresa: Empresa;
}