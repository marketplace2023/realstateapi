import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagenVideo } from './entities/imagenvideo.entity';
import { ImagenVideoService } from './imagenvideo.service';
import { ImagenVideoController } from './imagenvideo.controller';


@Module({
  imports: [TypeOrmModule.forFeature([ImagenVideo])],
  providers: [ImagenVideoService],
  controllers: [ImagenVideoController],
})
export class ImagenVideoModule {}
