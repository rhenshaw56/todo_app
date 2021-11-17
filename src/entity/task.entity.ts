import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn() public id!: number;

  @Column() name!: string;

  @Column() status!: 'in-progress' | 'completed';
}
