import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaModule } from './empresa/empresa.module';
import { AgenteModule } from './agente/agente.module';
import { ServicioModule } from './servicio/servicio.module';
import { TestimonioModule } from './testimonio/testimonio.module';
import { PropiedadModule } from './propiedad/propiedad.module';
import { RedSocialModule } from './redsocial/redsocial.module';
import { CitaModule } from './cita/cita.module';
import { MetodoPagoModule } from './metodopago/metodopago.module';
import { ImagenVideoModule } from './imagenvideo/imagenvideo.module';
import { SEOOptimizacionModule } from './seooptimizacion/seooptimizacion.module';
import { CitacionModule } from './citacion/citacion.module';
import { BacklinkModule } from './backlink/backlink.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', 
      password: '', 
      database: 'realstate_db', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true, 
    }),
    EmpresaModule,
    AgenteModule,
    ServicioModule,
    TestimonioModule,
    PropiedadModule,
    RedSocialModule,
    CitaModule,
    MetodoPagoModule,
    ImagenVideoModule,
    SEOOptimizacionModule,
    CitacionModule,
    BacklinkModule, 
  ],
})
export class AppModule {}
