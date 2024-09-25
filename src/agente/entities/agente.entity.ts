import { Cita } from "src/cita/entities/cita.entity";
import { Empresa } from "src/empresa/entities/empresa.entity";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
  } from "typeorm";

  
  @Entity()
  export class Agente {
    @PrimaryGeneratedColumn()
    id_agente: number;
  
    @Column()
    nombre_completo: string;
  
    @Column()
    años_experiencia: number;
  
    @Column("text")
    descripcion_corta: string;
  
    @Column("text")
    descripcion_larga: string;
  
    @ManyToOne(() => Empresa, (empresa) => empresa.agentes)
    empresa: Empresa;
  
    @OneToMany(() => Cita, (cita) => cita.agente)
    citas: Cita[];
  }