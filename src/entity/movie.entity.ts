import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Movie' })
@Unique(['movie_id'])
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, comment: '영화 제목' })
  movie_id: string;

  @Column({ type: 'tinyint', comment: '개봉 년도' })
  year: number;

  @Column({ type: 'varchar', length: 100, comment: '장르' })
  genres: string;

  @Column({ type: 'varchar', length: 100, comment: '감독 이름' })
  name: string;

  @Column({ type: 'varchar', length: 255, comment: '줄거리' })
  story: string;

  @Column({ type: 'tinyint', comment: '평점' })
  grade: number;

  @CreateDateColumn({ name: 'create_at', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'delete_at', comment: '삭제일' })
  deletedAt?: Date | null;
}
