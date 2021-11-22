import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn() public id?: number;

  @Column() name!: string;

  @Column({
    type: 'enum',
    enum: ['in-progress', 'completed'],
    default: 'in-progress',
  }) status!: 'in-progress' | 'completed';
}
