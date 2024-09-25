import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaModule } from './empresa/empresa.module';
import { AgenteModule } from './agente/agente.module';
import { ServicioModule } from './servicio/servicio.module';
import { TestimonioModule } from './testimonio/testimonio.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', 
      password: 'password', 
      database: 'realstate_db', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true, 
    }),
    EmpresaModule,
    AgenteModule,
    ServicioModule,
    TestimonioModule, 
  ],
})
export class AppModule {}
