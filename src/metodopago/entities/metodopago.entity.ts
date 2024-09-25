import { Empresa } from "src/empresa/entities/empresa.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class MetodoPago {
  @PrimaryGeneratedColumn()
  id_metodo_pago: number;

  @Column()
  nombre_metodo_pago: string;

  @ManyToOne(() => Empresa, (empresa) => empresa.metodosPago)
  empresa: Empresa;
}