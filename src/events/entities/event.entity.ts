import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { User } from 'src/users/entities/user.entity';


@Entity()
export class Event {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    title: string;

    @Column()
    @IsNotEmpty()
    eventTime: string;

    // @Column("text", {array: true, nullable: true})

    @Column({ default: false })
    @IsNotEmpty()
    organizator: boolean;

    @ManyToMany(() => User, user => user.events)
    participants: User[];
    
}
