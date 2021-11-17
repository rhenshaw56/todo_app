import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() public id!: number;

  @Column() email!: string;

  @Column() password!: string;
}
