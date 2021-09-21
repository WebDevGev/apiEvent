import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';


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

    @Column("text", {array: true, nullable: true})
    participants?: string[];

    @Column({ default: false })
    @IsNotEmpty()
    organizator: boolean;
}
