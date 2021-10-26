import {
  JoinTable,
  ManyToMany,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
} from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Event } from 'src/events/entities/event.entity';

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

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column({ nullable: true })
  organizator?: string;

  @Column({ default: false })
  isSignIn?: boolean;

  @ManyToMany(() => Event, (event) => event.participants)
  @JoinTable()
  events?: Event[];

  @BeforeInsert()
  emailToLowerCase() {
    this.email = this.email.toLowerCase();
  }
}
