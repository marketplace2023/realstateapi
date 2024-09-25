import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestimonioService } from './testimonio.service';
import { TestimonioController } from './testimonio.controller';
import { Testimonio } from './entities/testimonio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Testimonio])],
  providers: [TestimonioService],
  controllers: [TestimonioController],
})
export class TestimonioModule {}
