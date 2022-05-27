import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @ApiProperty({ description: '제목' })
  readonly title: string;

  @IsNumber()
  @ApiProperty({ description: '년도' })
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  @ApiProperty({ description: '장르' })
  readonly genres: string[];
}
