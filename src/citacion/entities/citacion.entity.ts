import { Empresa } from 'src/empresa/entities/empresa.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Citacion {
  @PrimaryGeneratedColumn()
  id_citacion: number;

  @Column()
  nombre_citacion: string;

  @Column()
  url_citacion: string;

  @Column()
  nap_consistente: boolean;

  @Column()
  fecha_citacion: Date;

  @ManyToOne(() => Empresa, (empresa) => empresa.citaciones)
  empresa: Empresa;
}
