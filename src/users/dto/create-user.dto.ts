import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'user@gmail.com', description: 'Email' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '12345678', description: 'Password' })
  password: string;
}
