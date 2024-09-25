import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaModule } from './empresa/empresa.module';
import { Empresa } from './empresa/entities/empresa.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', 
      password: 'password', 
      database: 'realstate_db', 
      entities: [Empresa], 
      synchronize: true, 
    }),
    EmpresaModule, 
  ],
})
export class AppModule {}
