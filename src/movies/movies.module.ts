import { MovieRepository } from './movies.repository';
import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MovieRepository])],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
