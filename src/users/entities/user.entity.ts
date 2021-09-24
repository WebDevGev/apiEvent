import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import {IsEmail, IsNotEmpty} from 'class-validator'

@Entity()
export class User {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column({nullable: true})
  firstName?: string;

  @Column({nullable: true})
  lastName?: string;

  @Column({ default: false })
  organizator?: boolean;

  @BeforeInsert()
  emailToLowerCase(){
    this.email = this.email.toLowerCase();
  }

}
