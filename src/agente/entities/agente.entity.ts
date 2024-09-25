import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
  } from "typeorm";
  import { Empresa } from "./empresa.entity";
  import { Cita } from "./cita.entity";
  
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