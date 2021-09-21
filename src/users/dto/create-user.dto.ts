import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, IsString} from 'class-validator'


export class CreateUserDto {
    @ApiProperty({example: 'user@gmail.com', description: 'Email'})
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    readonly email: string;

    @ApiProperty({example: '12345678', description: 'Password'})
    @IsNotEmpty()
    @IsString()
    readonly password: string;
}