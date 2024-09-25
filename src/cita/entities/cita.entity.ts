import { Agente } from "src/agente/entities/agente.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Cita {
  @PrimaryGeneratedColumn()
  id_cita: number;

  @Column()
  fecha_hora: Date;

  @Column()
  nombre_cliente: string;

  @Column()
  telefono_cliente: string;

  @Column()
  email_cliente: string;

  @ManyToOne(() => Agente, (agente) => agente.citas)
  agente: Agente;
}